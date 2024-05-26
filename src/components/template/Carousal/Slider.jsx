"use client"

import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import {ASSETS} from '../../../../public/Assets'

const SwiperComponent = () => {
  const slides = [
    {
      "src": "../../../../public/images/portugal.jpg",
      "title": "Australia",
    },
    {
      "src": ASSETS.finland,
      "title": "Finland",
    },
    {
      "src": ASSETS.itley,
      "title": "Lake como italian",
    },
    {
      "src": ASSETS.japan,
      "title": "Japan",
    },
    {
      "src": ASSETS.kaung,
      "title": "Kuang Si Falls",
    },
    {
      "src": ASSETS.muchai,
      "title": "Mu Cang Chai",
    },
    {
      "src": ASSETS.portugal,
      "title": "Portugal",
    },
    {
      "src": ASSETS.usa,
      "title": "Joshua Tree USA",
    }
  

  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      loopedSlides: 16,
      speed: 700,
      // autoplay: {
      //   delay: 1500,
      //   disableOnInteraction: false,
      // },
      centeredSlides: true,
      breakpoints: {
        400: { slidesPerView: 1 },
        560: { slidesPerView: 2 },
        800: { slidesPerView: 2 },
        1060: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
        1560: { slidesPerView: 5 },
        1700: { slidesPerView: 6 },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="overflow-x-hidden">
      <div className="swiper-container" ref={swiperRef}>
        <ul className="swiper-wrapper ag-slide_list">
          {slides.map((slide, index) => (
            <li className="swiper-slide ag-slide_item" key={index}>
            {/* <li className="swiper-slide ag-slide_item" key={index} data-swiper-autoplay="1500"> */}
              <div className="flex flex-col">

               <div
               style={{
                 height:"220px",
                margin:"0 44px",
                borderRadius:"20px",
                position:"relative",
              }}
               >
<Image
src={slide.src}
alt={slide.title}
layout='fill'
className="object-cover"
/>
               </div>
              <div
              className='shadow-xl'
                style={{
                  margin:"0 44px",  
                  height:"100px",

                }}
              >
         <h6 className="text-lg mb-8 font-bold ">{slide.title}</h6>

              </div>
         
                 </div>
             
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SwiperComponent;
