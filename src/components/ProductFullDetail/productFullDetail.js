import React, { useMemo, Fragment, Suspense, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import { Form } from 'informed';
import { Info } from 'react-feather';
import "./style.css"

import Price from '@magento/venia-ui/lib/components/Price';
import { useProductFullDetail } from '@magento/peregrine/lib/talons/ProductFullDetail/useProductFullDetail';
import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Breadcrumbs from '../Breadcrumbs';
import Button from '../Button';
import Carousel from '../ProductImageCarousel';
import FormError from '../FormError';
import QuantityStepper from '../QuantityStepper';
import RichContent from '../RichContent/richContent';
import { ProductOptionsShimmer } from '../ProductOptions';
import CustomAttributes from './CustomAttributes';
import defaultClasses from './productFullDetail.module.css';
import Rating from '../Rating'  //jrb
// import { useQuery } from '@apollo/client';
// import { GET_RATING } from './rating.gql'

const WishlistButton = React.lazy(() => import('../Wishlist/AddToListButton'));
const Options = React.lazy(() => import('../ProductOptions'));
const Offer = React.lazy(() => import('../Offer'))

// Correlate a GQL error message to a field. GQL could return a longer error
// string but it may contain contextual info such as product id. We can use
// parts of the string to check for which field to apply the error.
const ERROR_MESSAGE_TO_FIELD_MAPPING = {
    'The requested qty is not available': 'quantity',
    'Product that you are trying to add is not available.': 'quantity',
    "The product that was requested doesn't exist.": 'quantity'
};

// Field level error messages for rendering.
const ERROR_FIELD_TO_MESSAGE_MAPPING = {
    quantity: 'The requested quantity is not available.'
};


const ProductFullDetail = props => {
    const { product } = props;


    const talonProps = useProductFullDetail({ product });


    const {
        breadcrumbCategoryId,
        errorMessage,
        handleAddToCart,
        handleSelectionChange,
        isOutOfStock,
        isEverythingOutOfStock,
        outOfStockVariants,
        isAddToCartDisabled,
        isSupportedProductType,
        mediaGalleryEntries,
        productDetails,
        customAttributes,
        wishlistButtonProps
    } = talonProps;

    // console.log('producFulltDetails', productDetails);

    // const { loading, error, data } = useQuery(GET_RATING, {
    //     variables: { productName },
    // });

    const { formatMessage } = useIntl();

    const classes = useStyle(defaultClasses, props.classes);

    const options = isProductConfigurable(product) ? (
        <Suspense fallback={<ProductOptionsShimmer />}>
            <Options
                onSelectionChange={handleSelectionChange}
                options={product.configurable_options}
                isEverythingOutOfStock={isEverythingOutOfStock}
                outOfStockVariants={outOfStockVariants}
            />
        </Suspense>
    ) : null;

    const breadcrumbs = breadcrumbCategoryId ? (
        <Breadcrumbs
            categoryId={breadcrumbCategoryId}
            currentProduct={productDetails.name}
        />
    ) : null;

    // Fill a map with field/section -> error.
    const errors = new Map();
    if (errorMessage) {
        Object.keys(ERROR_MESSAGE_TO_FIELD_MAPPING).forEach(key => {
            if (errorMessage.includes(key)) {
                const target = ERROR_MESSAGE_TO_FIELD_MAPPING[key];
                const message = ERROR_FIELD_TO_MESSAGE_MAPPING[target];
                errors.set(target, message);
            }
        });

        // Handle cases where a user token is invalid or expired. Preferably
        // this would be handled elsewhere with an error code and not a string.
        if (errorMessage.includes('The current user cannot')) {
            errors.set('form', [
                new Error(
                    formatMessage({
                        id: 'productFullDetail.errorToken',
                        defaultMessage:
                            'There was a problem with your cart. Please sign in again and try adding the item once more.'
                    })
                )
            ]);
        }

        // Handle cases where a cart wasn't created properly.
        if (
            errorMessage.includes('Variable "$cartId" got invalid value null')
        ) {
            errors.set('form', [
                new Error(
                    formatMessage({
                        id: 'productFullDetail.errorCart',
                        defaultMessage:
                            'There was a problem with your cart. Please refresh the page and try adding the item once more.'
                    })
                )
            ]);
        }

        // An unknown error should still present a readable message.
        if (!errors.size) {
            errors.set('form', [
                new Error(
                    formatMessage({
                        id: 'productFullDetail.errorUnknown',
                        defaultMessage:
                            'Could not add item to cart. Please check required options and try again.'
                    })
                )
            ]);
        }
    }

    const customAttributesDetails = useMemo(() => {
        const list = [];
        const pagebuilder = [];
        const skuAttribute = {
            attribute_metadata: {
                uid: 'attribute_sku',
                used_in_components: ['PRODUCT_DETAILS_PAGE'],
                ui_input: {
                    ui_input_type: 'TEXT'
                },
                label: formatMessage({
                    id: 'global.sku',
                    defaultMessage: 'SKU'
                })
            },
            entered_attribute_value: {
                value: productDetails.sku
            }
        };
        if (Array.isArray(customAttributes)) {
            customAttributes.forEach(customAttribute => {
                if (
                    customAttribute.attribute_metadata.ui_input
                        .ui_input_type === 'PAGEBUILDER'
                ) {
                    pagebuilder.push(customAttribute);
                } else {
                    list.push(customAttribute);
                }
            });
        }
        list.unshift(skuAttribute);
        return {
            list: list,
            pagebuilder: pagebuilder
        };
    }, [customAttributes, productDetails.sku, formatMessage]);

    // console.log('customAttributesDetails->', customAttributesDetails);

    const cartCallToActionText =
        !isEverythingOutOfStock || !isOutOfStock ? (
            <FormattedMessage
                id="productFullDetail.addItemToCart"
                defaultMessage="Add to Cart"
            />
        ) : (
            <FormattedMessage
                id="productFullDetail.itemOutOfStock"
                defaultMessage="Out of Stock"
            />
        );
    // Error message for screen reader
    const cartActionContent = isSupportedProductType ? (
        <section className={`classes.actButton  product-addToCart`}>
            <Button
                data-cy="ProductFullDetail-addToCartButton"
                disabled={isAddToCartDisabled}
                aria-disabled={isAddToCartDisabled}
                aria-label={
                    isEverythingOutOfStock
                        ? formatMessage({
                            id: 'productFullDetail.outOfStockProduct',
                            defaultMessage:
                                'This item is currently out of stock'
                        })
                        : ''
                }
                className={`product-section`}
                priority="high"
                type="submit"
            >
                {cartCallToActionText}
            </Button>
        </section>
    ) : (
        <div className={classes.unavailableContainer}>
            <Info />
            <p>
                <FormattedMessage
                    id={'productFullDetail.unavailableProduct'}
                    defaultMessage={
                        'This product is currently unavailable for purchase.'
                    }
                />
            </p>
        </div>
    );

    const shortDescription = productDetails.shortDescription ? (
        <div className='product-short-description' dangerouslySetInnerHTML={{ '__html': productDetails.shortDescription.html }}></div>
    ) : null;

    const pageBuilderAttributes = customAttributesDetails.pagebuilder.length ? (
        <section className={classes.detailsPageBuilder}>
            <CustomAttributes
                classes={{ list: classes.detailsPageBuilderList }}
                customAttributes={customAttributesDetails.pagebuilder}
                showLabels={false}
            />
        </section>
    ) : null;

    const [productIndentifier, setProductIndentifier] = useState('details')
    const handleSelected = (event, identifier) => {
        let infoHeader = document.querySelector('.product-detail-info-header')?.childNodes;
        infoHeader.forEach(head => {
            head.classList.remove('product-info-selected')
        })
        event.currentTarget.classList.add('product-info-selected');
        if (identifier == 'description') {
            setProductIndentifier('description')
        } else {
            setProductIndentifier('details')
        }
    }


    return (
        <Fragment>
            {breadcrumbs}
            <Form
                className={classes.root}
                data-cy="ProductFullDetail-root"
                onSubmit={handleAddToCart}
            >
                <section className={`${classes.imageCarousel} image-carousel`}>
                    <Carousel images={mediaGalleryEntries} />
                </section>
                <section className={'product-section product-header mx-sm'}>
                    <h1
                        aria-live="polite"
                        className={`product-section product-header-title`}
                        data-cy="ProductFullDetail-productName"
                    >
                        {productDetails.name}
                    </h1>
                    {shortDescription}
                    <p className='product-brand'>
                        {
                            customAttributesDetails.list?.filter(atr => atr.attribute_metadata.code === "brand2")[0]?.entered_attribute_value.value
                        }
                    </p>
                    <Rating />  {/*jrb*/}
                    <div className='product-divider' />
                </section>
                <section className='product-section product-price mx-sm'>
                    <div>
                        <Price
                            currencyCode={productDetails.price.currency}
                            value={productDetails.price.value}
                            type={'price'}
                        />
                        <div className={'inclusive-of-taxes'}>Inclusive of all taxes</div>
                    </div>
                    <div>
                        <Price
                            currencyCode={productDetails.price.currency}
                            value={productDetails.regularPrice}
                            type={'regular-price'}
                        />
                    </div>
                    <div className={'product-discount'}>{productDetails.discount + '%'}</div>
                </section>
                <FormError
                    classes={{
                        root: classes.formErrors
                    }}
                    errors={errors.get('form') || []}
                />
                <section className={`options-container`}>{options}</section>
                <section className={`classes.quantity quantity-stepper`}>
                    {/* <span
                        data-cy="ProductFullDetail-quantityTitle"
                        className={classes.quantityTitle}
                    >
                        <FormattedMessage
                            id={'global.quantity'}
                            defaultMessage={'Quantity'}
                        />
                    </span> */}
                    <QuantityStepper
                        classes={{ root: classes.quantityRoot }}
                        min={1}
                        message={errors.get('quantity')}
                    />
                </section>
                <div className='offer-section'>
                    <Offer />
                </div>
                <section className={'product-section product-action-buttons mx-sm'}>
                    <Suspense fallback={null}>
                        <WishlistButton {...wishlistButtonProps} showIcon={false} />
                    </Suspense>
                    {cartActionContent}
                </section>
                {/* <div className={'product-detail-TOS'}>
                    {
                        console.log(customAttributesDetails.list)
                    }
                </div> */}
                {/*
                    <section className={`classes.description`}>
                        <span
                            data-cy="ProductFullDetail-descriptionTitle"
                            className={classes.descriptionTitle}
                        >
                            <FormattedMessage
                                id={'productFullDetail.description'}
                                defaultMessage={'Description'}
                            />
                        </span>
                        <RichContent html={productDetails.description} />
                    </section>
                    <section className={`classes.details`}>
                        <span
                            data-cy="ProductFullDetail-detailsTitle"
                            className={classes.detailsTitle}
                        >
                            <FormattedMessage
                                id={'productFullDetail.details'}
                                defaultMessage={'Details'}
                            />
                        </span>
                        <CustomAttributes
                            customAttributes={customAttributesDetails.list}
                        />
                    </section>
                */}
                {pageBuilderAttributes}
            </Form>
            <div className='product-detail-info-header'>
                <section className={`classes.details product-info-selected`}
                    onClick={(event) => handleSelected(event, 'details')}>
                    <span
                        data-cy="ProductFullDetail-detailsTitle"
                        className={`classes.detailsTitle`}
                    >
                        <FormattedMessage
                            id={'productFullDetail.details'}
                            defaultMessage={'Details'}
                        />
                    </span>
                </section>
                <section className={`classes.description`}
                    onClick={(event) => handleSelected(event, 'description')}>
                    <span
                        data-cy="ProductFullDetail-descriptionTitle"
                        className={`classes.descriptionTitle`}
                    >
                        <FormattedMessage
                            id={'productFullDetail.description'}
                            defaultMessage={'Description'}
                        />
                    </span>
                    {/* <RichContent html={productDetails.description} /> */}
                </section>
            </div>
            <div className='product-detail-info'>
                {
                    productIndentifier == 'details' ?
                        <CustomAttributes
                            customAttributes={customAttributesDetails.list} /> :
                        <RichContent html={productDetails.description} />
                }
            </div>
        </Fragment>
    );
};

ProductFullDetail.propTypes = {
    classes: shape({
        cartActions: string,
        description: string,
        descriptionTitle: string,
        details: string,
        detailsPageBuilder: string,
        detailsPageBuilderList: string,
        detailsTitle: string,
        imageCarousel: string,
        options: string,
        productName: string,
        productPrice: string,
        quantity: string,
        quantityTitle: string,
        quantityRoot: string,
        root: string,
        title: string,
        unavailableContainer: string
    }),
    product: shape({
        __typename: string,
        id: number,
        stock_status: string,
        sku: string.isRequired,
        price: shape({
            regularPrice: shape({
                amount: shape({
                    currency: string.isRequired,
                    value: number.isRequired
                })
            }).isRequired
        }).isRequired,
        media_gallery_entries: arrayOf(
            shape({
                uid: string,
                label: string,
                position: number,
                disabled: bool,
                file: string.isRequired
            })
        ),
        description: string,
        short_description: shape({
            html: string,
            __typename: string
        })
    }).isRequired
};

export default ProductFullDetail;
