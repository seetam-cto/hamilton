import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import productImage from "../../assets/images/elfin.png"

const Product = ({product}) => {
    return (
        <div className="product-container">
            <div className="product-image">
                <Image width={260} height={260} src={product.image} alt="" />
                <div className="product-image-badge">
                    {product.category.isEnabled && <span className="product-image-badge-label">{product.category.title}</span>}
                    {product.price.mrp > product.price.sale && <span className="product-image-badge-label">SALE</span>}
                </div>
                <div className="product-image-favourite"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
            </div>
            <div className="product-rating">
                {[...Array(5).keys()].map((x) => (
                    <>{product.rating >= (x+1) ? <i class="fa fa-star" aria-hidden="true"></i> : <i class="fa fa-star-o" aria-hidden="true"></i>}</>
                ))}
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className='product-info'>{product.about}</p>
            <h4 className='product-brand'>{product.brand}</h4>
            <div className="product-price">
                {(product.price.mrp > product.price.sale) ? (
                    <p><span className="product-price sale">₹{product.price.sale}</span> <span className="product-price sale mrp">₹{product.price.mrp}</span>
                    <span className="product-price-sale-percent">
                        { Math.round((100 - ((product.price.sale/product.price.mrp)*100))).toString().slice(0,2).trim(".") }
                        %OFF</span></p>
                ):  <p><span className="product-price sale">₹{product.price.sale}</span></p>}
            </div>
            <button className="banner-slider-slide-button product-addtocart">ADD TO CART</button>
        </div>
    )
}

export const ProductCollection = ({
    title, 
    products
}) => {
    const product={
        name: "Elfin",
        about: "Stainless Steel Hot and Cold Water Bottle (300ml)",
        brand: "Milton",
        image: productImage.src,
        price: {
            mrp: 552,
            sale: 522
        },
        rating: 4.2,
        category: {
            isEnabled: true,
            title: "Bestseller"
        },
        link: "/product-page/elfin"
    }
    return (
        <div className="product-collection">
            <div className="container">
                <h2 className="product-collection-title">
                    {title}
                </h2>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={4}
                loop
                spaceBetween={20}
                className='product-collection-slider'
                >
                    <SwiperSlide key={'1'}>
                        <Product key={1} product={product} />
                    </SwiperSlide>
                    <SwiperSlide key={'2'}>
                        <Product key={2} product={product} />
                    </SwiperSlide>
                    <SwiperSlide key={'3'}>
                        <Product key={3} product={product} />
                    </SwiperSlide>
                    <SwiperSlide key={'4'}>
                        <Product key={4} product={product} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export const FormButton = () => {
    return (
        <div className="formbutton">
            
        </div>
    )
}


export default Product