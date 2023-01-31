import React, { useState } from "react";
import "./CustomQuantityStepper.css"

const CustomQuantityStepper = () => {
    const [num, setNum] = useState(1)
    return (
        <div className="custom-quantity-container">
            <div onClick={()=> setNum(current=> {
                return current==5 ? current : current +1
            })}>+</div>
            <div>{num}</div>
            <div onClick={() => setNum(current=> {
                return current == 1 ? 1 : current-1
            })}>-</div>
        </div>
    )
}

export default CustomQuantityStepper;