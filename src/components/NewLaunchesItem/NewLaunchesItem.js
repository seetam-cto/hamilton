import React from "react";
import Carousel from '../ProductImageCarousel/carousel';
import { Form } from "informed";
import QuantityStepper from "../QuantityStepper";
// import QuantityStepper from "@magento/venia-ui/lib/components/CartPage/ProductListing/quantity"
import './newLaunches.css';
import Button from "@magento/venia-ui/lib/components/Button";
// import { useProductFullDetail } from "@magento/peregrine/lib/talons/ProductFullDetail/useProductFullDetail";
// import CustomQuantityStepper from "./CustomQuanityStepper";
import { useEventingContext } from "@magento/peregrine/lib/context/eventing";
import { useCartContext } from "@magento/peregrine/lib/context/cart";

const NewLaunchesItem = props => {
    const { item } = props;
    const [, { dispatch }] = useEventingContext();
    const [{ cartId }] = useCartContext();
    // const talonProps = useProductFullDetail({ product: item });

    // const {
    //     breadcrumbCategoryId,
    //     errorMessage,
    //     handleAddToCart,
    //     handleSelectionChange,
    //     isOutOfStock,
    //     isEverythingOutOfStock,
    //     outOfStockVariants,
    //     isAddToCartDisabled,
    //     isSupportedProductType,
    //     mediaGalleryEntries,
    //     productDetails,
    //     customAttributes,
    //     wishlistButtonProps
    // } = talonProps;

    // console.log(talonProps);

    const handleAddToCart = () => {
        try {
            if (dispatch) {
                console.log(cartId, dispatch)
                dispatch({
                    type: 'CART_ADD_ITEM',
                    payload: {
                        cartId,
                        sku: "Milton Atlantis 900 Thermosteel Water Bottle",
                        name: "Milton Atlantis 900 Thermosteel Water Bottle",
                        priceTotal: 999,
                        currencyCode: "INR",
                        discountAmount: 76,
                        selectedOptions: [{ attribute: 'Color', value: 'STEEL' }, { attribute: 'Variant', value: 'option 1' }, { attribute: 'Capacity', value: '400 ml' }],
                        quantity: 1
                    }
                })
            }
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
            <Form onSubmit={handleAddToCart}>
                <div className={`new-launches-container ${props?.class}`}>
                    <div>
                        <Carousel images={props?.item?.media_gallery} />
                    </div>
                    <div>
                        <h1 className={"new-launch-heading"}>{props?.item?.meta_description}</h1>
                        <div className={"new-launch-brand"}>{props?.item?.brand}</div>
                        <div dangerouslySetInnerHTML={{ __html: props?.item?.short_description.html }}></div>
                        <div className="new-launch-currency">₹{props?.item?.price_range?.maximum_price?.final_price?.value}</div>
                        {/* <div className={"new-launches-quantity-child"}>

                    <CustomQuantityStepper />

                    <button>Add To Cart</button>
                </div> */}
                        <QuantityStepper initialValue={1} min={1} />
                        <Button type="submit">Add To Cart</Button>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default NewLaunchesItem; 