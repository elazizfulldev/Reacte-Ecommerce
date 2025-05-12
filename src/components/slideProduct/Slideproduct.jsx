import React from 'react'
import Product from './Product'
import './slideProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
export default function SlideProduct({title, data}) {

  console.log(data + "this is data")
  return (
    <div className='slide-products slide'>
        <div className="container">
            <div className="top-slide">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet.</p>

                
            </div>
            
            <Swiper loop={true} autoplay={{delay: 6000,disableOnInteraction: false,}} slidesPerView={5} spaceBetween={20} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">

              {data.map((res)=>(
                <SwiperSlide><Product item = {res}/></SwiperSlide>

              ))}
                

              
              
              
            </Swiper>

        </div>
   
    </div>
  )
}
