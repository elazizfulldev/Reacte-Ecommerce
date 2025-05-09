import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination , Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Heroslider() {
  return (

    <>
        <div className="hero">

            <div className="container">
                <Swiper loop={true} autoplay={{delay: 3000,disableOnInteraction: false,}} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Micrisift XboX <br /> 360 Controller </h3>
                            <p>windows xp/11/10/7/8 ps3, Tv Box</p>
                            <Link to="/" className='btn'>Shop Now</Link>

                        </div>
                        <img src="/src/img/banner_Hero1.jpg" alt="slider hero number 1" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Micrisift XboX <br /> 360 Controller </h3>
                            <p>windows xp/11/10/7/8 ps3, Tv Box</p>
                            <Link to="/" className='btn'>Shop Now</Link>

                        </div>
                        <img src="/src/img/banner_Hero2.jpg" alt="slider hero number 1" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Micrisift XboX <br /> 360 Controller </h3>
                            <p>windows xp/11/10/7/8 ps3, Tv Box</p>
                            <Link to="/" className='btn'>Shop Now</Link>

                        </div>
                        <img src="/src/img/banner_Hero3.jpg" alt="slider hero number 1" />

                    </SwiperSlide>
            
                </Swiper>

            </div>
            
        </div>
       
    </>
  )
}
