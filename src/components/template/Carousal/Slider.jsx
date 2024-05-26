"use client"

import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import styles from './Carousel.module.scss';

const SwiperComponent = () => {
  const slides = [
    {
      "src": "https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/swiper/images/foto-n-1.jpg",
      "title": "Number1",
    },
    {
      "src": "https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/swiper/images/foto-n-2.jpg",
      "title": "Number2",
    },
    {
      "src": "https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/swiper/images/foto-n-2.jpg",
      "title": "Number3",
    },
    {
      "src": "https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/swiper/images/foto-n-2.jpg",
      "title": "Number4",
    },
    {
      "src": "https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/swiper/images/foto-n-2.jpg",
      "title": "Number5",
    },
    {
      "src": "https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/swiper/images/foto-n-2.jpg",
      "title": "Number6",
    },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      loopedSlides: 16,
      speed: 700,
    //   autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false,
    //   },
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
    <section className="">
      <div className="swiper-container" ref={swiperRef}>
        <ul className="swiper-wrapper ag-slide_list">
          {slides.map((slide, index) => (
            // <li className="swiper-slide ag-slide_item" key={index} data-swiper-autoplay="1500">
            <li className="swiper-slide ag-slide_item" key={index}>
               <div
               className="hello"
               style={{backgroundImage: `url(${slide.src})`}}
               >
         <h6 className="text-lg font-bold ">{slide.title}</h6>


               </div>
              {/* <img src={slide.src} className={styles.agSlideImg} alt="" /> */}
         
             
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SwiperComponent;
