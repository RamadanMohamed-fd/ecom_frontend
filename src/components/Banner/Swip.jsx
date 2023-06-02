import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Arrow from '../Arrow';

export default function App() {
  return (
    <div className="group ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <div className="h-[450px] md:h-[600px] relative group overflow-hidden">
            <div className="flex flex-col justify-center items-center bg-center transition duration-150 ease-in-out bg-cover h-full bg-[url(/baner_image/Banner_1.jpg)]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] md:h-[600px] relative group overflow-hidden">
            <div className="flex flex-col justify-center items-center bg-center transition duration-150 ease-in-out bg-cover h-full bg-[url(/baner_image/Banner-2.jpg)]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] md:h-[600px]  relative group overflow-hidden">
            <div className="flex flex-col justify-center items-center bg-center transition duration-150 ease-in-out bg-cover h-full bg-[url(/baner_image/Banner_3.jpg)]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="video-container  h-[4500px] md:h-[550px] bg-black duration-150 ease-in-out">
            <video
              src="/VIDEOS/1.mp4"
              className="w-full h-full"
              loop
              autoPlay
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-[450px] md:h-[550px] bg-black transition duration-150 ease-in-out">
            <video src="/VIDEOS/2.mp4" className=" h-full " loop autoPlay />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-[450px] md:h-[550px] bg-black transition duration-150 ease-in-out">
            <video src="/VIDEOS/3.mp4" className=" h-full " loop autoPlay />
          </div>
        </SwiperSlide>
        <Arrow />
        <button className=" absolute btn z-[200] top-[70%] left-[20%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg rounded-md ">
          BUY NOW
        </button>
      </Swiper>
    </div>
  );
}
