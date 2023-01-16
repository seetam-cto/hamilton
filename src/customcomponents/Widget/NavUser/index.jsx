import React, { useState } from 'react'

const NavUser = () => {
    const [pincodeBox, setPincodeBox] = useState(false)
    const [userBox, setUserBox] = useState(false)
    const [cartBox, setCartBox] = useState(false)
  return (
    <div className="header-user">
        <div className="pincode">
            <div onClick={() => setPincodeBox(!pincodeBox)} className="header-user-head">
                <i class="fa fa-location-dot"></i>
                <span>PINCODE</span>
            </div>
            {pincodeBox && (
                <div className="pincode-box">
                    <p>Enter your pincode to see product availability and delivery options.</p>
                    <div className="pincode-box-check">
                        <i class="fa-solid fa-location-dot"></i>
                        <input type="text" placeholder='Enter Pincode' />
                        <button className="pincode-box-check-button">CHECK</button>
                    </div>
                    <div className="pincode-box-divider">OR</div>
                    <button className="pincode-box-detect">
                        DETECT PINCODE
                    </button>
                </div>
            )}
        </div>
        <div className="user">
            <div className="header-user-head">
                <i class="fa-regular fa-user"></i>
            </div>
            <div className="user-box">

            </div>
        </div>
        <div className="cart">
            <div className="header-user-head">
                <i class="fa fa-bag-shopping"></i>
            </div>
            <div className="cart-box">

            </div>
        </div>
    </div>
  )
}

export default NavUser