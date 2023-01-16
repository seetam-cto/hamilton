import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import milton from "../../../assets/images/logo.svg"
import procook from "../../../assets/images/procook_logo.png"
import treo from "../../../assets/images/treo_logo.png"
import spotzero from "../../../assets/images/SpotZero_logo.png"

const BrandsBand = () => {
  return (
    <section className="bands-brands">
        <div className="container">
            <Row>
                <Col md={2}>
                    <div className="bands-brands-header">
                        <h2>Shop Brands</h2>
                    </div>
                </Col>
                <Col md={22}>
                    <Row>
                        <Col md={6}>
                            <div className="bands-brands-brand">
                                <Image src={milton.src} width={120} height={30} />
                                <p>Innovating our way into your home</p>
                                <Link href="/">SHOP <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="bands-brands-brand">
                                <Image src={procook.src} width={120} height={30} />
                                <p>Designed for healthy cooking</p>
                                <Link href="/">SHOP <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="bands-brands-brand">
                                <Image src={treo.src} width={120} height={30} />
                                <p>Add a touch of elegance to your kitchen</p>
                                <Link href="/">SHOP <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="bands-brands-brand">
                                <Image src={spotzero.src} width={120} height={30} />
                                <p>Solutions for simplified cleaning</p>
                                <Link href="/">SHOP <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default BrandsBand