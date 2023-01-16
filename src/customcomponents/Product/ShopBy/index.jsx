import { Tabs, Row, Col } from 'antd'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from './categories'

const ShopCard = ({category, key}) => {
    return (
        <Col key={key} md={6}>
            <Link href={category.link} className="shopby-card">
                <Image src={category.image} width={80} height={80} />
                <span>{category.title}</span>
                <i class="fa-solid fa-chevron-right"></i>
            </Link>
        </Col>
    )
}

const ShopBy = () => {
  return (
    <section className="shopby">
        <div className="container">
            <h2>Shop By</h2>
            <Tabs
            defaultActiveKey='product'
            items={[
                {
                    label: 'Product',
                    key: 'product',
                    children: <Row gutter={[40,40]}>
                                {categories.map((category, i) => (
                                    <ShopCard category={category} key={i}  />
                                ))}
                            </Row>
                },
                {
                    label: 'Usage',
                    key: 'usage',
                    children: <Row gutter={[40,40]}>
                                {categories.reverse().slice(0,9).map((category, i) => (
                                    <ShopCard category={category} key={i}  />
                                ))}
                            </Row>
                },
                {
                    label: 'Material',
                    key: 'material',
                    children: <Row gutter={[40,40]}>
                                {categories.map((category, i) => (
                                    <ShopCard category={category} key={i}  />
                                ))}
                            </Row>
                }
            ]}
            />
        </div>
    </section>
  )
}

export default ShopBy