import React from "react";
import Carousel from '../ProductImageCarousel/carousel'
// import QuantityStepper from "../QuantityStepper";


const NewLaunchesItem = props => {
    console.log(props?.item);
    return (
        <div>new Launches Item
            <Carousel images={props?.item?.media_gallery} />
            <div>
                <div>{props?.item?.meta_description}</div>
                {/* <QuantityStepper min={1}/> */}
            </div>
        </div>
    )
}

export default NewLaunchesItem; 