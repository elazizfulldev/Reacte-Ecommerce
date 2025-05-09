import React from 'react'
import Product from './Product'
import './slideProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function SlideProduct() {
  return (
    <div className='slide-products slide'>
        <div className="container">
            <div className="top-slide">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet.</p>

                
            </div>
            
            <Swiper slidesPerView={5} spaceBetween={30} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
              <SwiperSlide><Product/></SwiperSlide>
              <SwiperSlide><Product/></SwiperSlide>
              <SwiperSlide><Product/></SwiperSlide>
              <SwiperSlide><Product/></SwiperSlide>
              <SwiperSlide><Product/></SwiperSlide>
              <SwiperSlide><Product/></SwiperSlide>
              <SwiperSlide><Product/></SwiperSlide>
            
            </Swiper>

        </div>
   
    </div>
  )
}
