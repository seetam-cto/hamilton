import { Col, Row } from 'antd'
import React from 'react'

const OffersBand = () => {
  return (
    <div className="bands-offers">
        <div className="container">
            <div className="bands-offers-content">
                <Row>
                    <Col md={18}>
                        <h2>Explore exciting offers</h2>
                        <p>Get 10% cashback on transactions of Rs.10,000 or more on Citi credit & debit cards. T&C apply*
                        <br />Click & Collect available at just Rs. 99 only (Valid for Hyderabad) for Navi Mumbai it's free. </p>
                    </Col>
                    <Col md={6}>
                        <button className="banner-slider-slide-button bands-offers-content-btn">VIEW ALL OFFERS</button>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default OffersBand