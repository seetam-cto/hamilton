import React from "react";
import Carousel from '../ProductImageCarousel/carousel';
import QuantityStepper from "../QuantityStepper";
import './newLaunches.css';
import CustomQuantityStepper from "./CustomQuanityStepper";


const NewLaunchesItem = props => {
    console.log(props?.item);
    return (
        <div className={`new-launches-container ${props?.class}`}>
            <div>
                <Carousel images={props?.item?.media_gallery} />
            </div>
            <div>
                <h1 className={"new-launch-heading"}>{props?.item?.meta_description}</h1>
                <div className={"new-launch-brand"}>{props?.item?.brand}</div>
                <div dangerouslySetInnerHTML={{ __html: props?.item?.short_description.html }}></div>
                <div className="new-launch-currency">₹{props?.item?.price_range?.maximum_price?.final_price?.value}</div>
                <div className={"new-launches-quantity-child"}>
                    <CustomQuantityStepper />
                    <button>Add To Cart</button>
                </div>
                {/* <QuantityStepper initialValue={1} min={1} message={'error occured'} /> */}
            </div>
        </div>
    )
}

export default NewLaunchesItem; 