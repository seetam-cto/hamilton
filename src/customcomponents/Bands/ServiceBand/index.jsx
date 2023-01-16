import Image from 'next/image'
import React from 'react'
import Container from '../../Layout/Container'
import shipping from "../../../assets/images/shipping.svg"
import returns from "../../../assets/images/return.svg"
import safe from "../../../assets/images/safe.svg"
import approved from "../../../assets/images/approved.svg"

const ServiceBand = () => {
  return (
    <div className="bands-services">
        <Container>
            <div className="bands-services-container">
                <div className="bands-services-service">
                    <Image src={shipping.src} width={120} height={80} className="bands-services-icon" />
                    <h3>
                        Free Shipping <br />
                        On All Orders
                    </h3>
                </div>
                <div className="bands-services-service">
                    <Image src={returns.src} width={120} height={80} className="bands-services-icon" />
                    <h3>
                        Easy XX Days <br />
                        Returns
                    </h3>
                </div>
                <div className="bands-services-service">
                    <Image src={safe.src} width={120} height={80} className="bands-services-icon" />
                    <h3>
                        Safe Shopping <br />
                        Experience at Stores
                    </h3>
                </div>
                <div className="bands-services-service">
                    <Image src={approved.src} width={120} height={80} className="bands-services-icon" />
                    <h3>
                        BPA-Free & FDA- <br />
                        Approved Products
                    </h3>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ServiceBand