import { useCallback, useState, useMemo } from 'react';
import { useEventingContext } from '@magento/peregrine/lib/context/eventing';
import { useCartContext } from '@magento/peregrine/lib/context/cart';

/**
 * @param {GraphQLDocument} props.addConfigurableProductToCartMutation - configurable product mutation
 * @param {GraphQLDocument} props.addSimpleProductToCartMutation - configurable product mutation
 * @param {Object.<string, GraphQLDocument>} props.operations - collection of operation overrides merged into defaults
 * @param {Object} props.product - the product, see RootComponents/Product
 *
 * @returns {{
 *  breadcrumbCategoryId: string|undefined,
 *  errorMessage: string|undefined,
 *  handleAddToCart: func,
 *  handleSelectionChange: func,
 *  handleSetQuantity: func,
 *  isAddToCartDisabled: boolean,
 *  isSupportedProductType: boolean,
 *  mediaGalleryEntries: array,
 *  productDetails: object,
 *  quantity: number
 * }}
 */
const useNewLaunchItems = props => {
    const {
        product
    } = props;

    console.log(props);

    const [{ cartId }] = useCartContext();

    const [, { dispatch }] = useEventingContext();


    const handleAddToCart = () => {
        console.log(product)
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: {
                cartId,
                sku: product.sku,
                name: product.name,
                priceTotal: product.price_range.maximum_price.final_price.value,
                currencyCode: product.price_range.maximum_price.final_price.currency,
            }
        });

    }

    return {
        handleAddToCart,
    };
};

export default useNewLaunchItems
