import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import Container from '../../Layout/Container';
import Image from 'next/image';
import banner from "../../../assets/images/banner.jpg"

const BannerSlider = () => {
  return (
    <div className="banner-slider">
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        >
            <SwiperSlide>
                <Image src={banner.src} width={1440} height={560} className="banner-slider-background" />
                <div className="banner-slider-slide">
                    <Container>
                        <div className="banner-slider-slide-align">
                            <h2>Happy homes start with</h2>
                            <h1>Milton!</h1>
                            <p>Discover and purchase homeware, kitchenware, cookware & serveware essentials that please and delight you and your loved ones.</p>
                            <button className="banner-slider-slide-button">SHOP NOW</button>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner.src} width={1440} height={560} className="banner-slider-background" />
                <div className="banner-slider-slide">
                    <Container>
                        <div className="banner-slider-slide-align">
                            <h2>Happy homes start with</h2>
                            <h1>Milton!</h1>
                            <p>Discover and purchase homeware, kitchenware, cookware & serveware essentials that please and delight you and your loved ones.</p>
                            <button className="banner-slider-slide-button">SHOP NOW</button>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner.src} width={1440} height={560} className="banner-slider-background" />
                <div className="banner-slider-slide">
                    <Container>
                        <div className="banner-slider-slide-align">
                            <h2>Happy homes start with</h2>
                            <h1>Milton!</h1>
                            <p>Discover and purchase homeware, kitchenware, cookware & serveware essentials that please and delight you and your loved ones.</p>
                            <button className="banner-slider-slide-button">SHOP NOW</button>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner.src} width={1440} height={560} className="banner-slider-background" />
                <div className="banner-slider-slide">
                    <Container>
                        <div className="banner-slider-slide-align">
                            <h2>Happy homes start with</h2>
                            <h1>Milton!</h1>
                            <p>Discover and purchase homeware, kitchenware, cookware & serveware essentials that please and delight you and your loved ones.</p>
                            <button className="banner-slider-slide-button">SHOP NOW</button>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerSlider