import React from 'react'
import blog1 from "../../../assets/images/blog1.png"
import blog2 from "../../../assets/images/blog2.png"
import blog3 from "../../../assets/images/blog3.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

const blogs= [
    {
        cover: blog1.src,
        title: 'Steel bottle like never before!',
        exerpt: 'Our new steel bottles come with mirror polish and brush metal design for an attractive finish. 3 different capacities which fits perfectly on all occassions',
        url: '/',
        meta: {
            date: '20 Jan 2022',
            readTime: '6 min',
            views: 150
        }
    },
    {
        cover: blog2.src,
        title: 'Steel bottle like never before!',
        exerpt: 'Our new steel bottles come with mirror polish and brush metal design for an attractive finish. 3 different capacities which fits perfectly on all occassions',
        url: '/',
        meta: {
            date: '20 Jan 2022',
            readTime: '6 min',
            views: 150
        }
    },
    {
        cover: blog3.src,
        title: 'Steel bottle like never before!',
        exerpt: 'Our new steel bottles come with mirror polish and brush metal design for an attractive finish. 3 different capacities which fits perfectly on all occassions',
        url: '/',
        meta: {
            date: '20 Jan 2022',
            readTime: '6 min',
            views: 150
        }
    }
]


const BlogSlider = () => {
  return (
    <section className="blog-slider">
        <div className="container">
            <h2 className='blog-slider-header'>Blogs</h2>
            <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={3}
            spaceBetween={40}
            loop
            >
                <SwiperSlide key={1} className='blog-slider-slide'>
                    <Image className='blog-slider-slide-cover' src={blogs[0].cover} width={260} height={260} />
                    <p className='blog-slider-slide-meta'><span className="date">{blogs[0].meta.date}</span> | <span className="readtime">{blogs[0].meta.readTime} read</span> | <span className="views">{blogs[0].meta.views} views</span></p>
                    <h2 className="blog-slider-slide-title">{blogs[0].title}</h2>
                    <p className="blog-slider-slide-exerpt">{blogs[0].exerpt}</p>
                    <Link className="blog-slider-slide-link" href={blogs[0].url}>READ BLOG <i class="fa-solid fa-arrow-right"></i></Link>
                </SwiperSlide>
                <SwiperSlide key={3} className='blog-slider-slide'>
                    <Image className='blog-slider-slide-cover' src={blogs[1].cover} width={260} height={260} />
                    <p className='blog-slider-slide-meta'><span className="date">{blogs[1].meta.date}</span> | <span className="readtime">{blogs[1].meta.readTime} read</span> | <span className="views">{blogs[1].meta.views} views</span></p>
                    <h2 className="blog-slider-slide-title">{blogs[1].title}</h2>
                    <p className="blog-slider-slide-exerpt">{blogs[1].exerpt}</p>
                    <Link className="blog-slider-slide-link" href={blogs[1].url}>READ BLOG <i class="fa-solid fa-arrow-right"></i></Link>
                </SwiperSlide>
                <SwiperSlide key={5}>
                    <div className="blog-slider-slide">
                        <Image className='blog-slider-slide-cover' src={blogs[2].cover} width={260} height={260} />
                        <p className='blog-slider-slide-meta'><span className="date">{blogs[2].meta.date}</span> | <span className="readtime">{blogs[2].meta.readTime} read</span> | <span className="views">{blogs[2].meta.views} views</span></p>
                        <h2 className="blog-slider-slide-title">{blogs[2].title}</h2>
                        <p className="blog-slider-slide-exerpt">{blogs[2].exerpt}</p>
                        <Link className="blog-slider-slide-link" href={blogs[2].url}>READ BLOG <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default BlogSlider