import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Arrow from "../Arrow";
import useWindowSize from "../useWindowSize";
import TitleVideo from "./TitleVideo";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import img1 from "../../../public/baner_image/1.jpg";
import img2 from "../../../public/baner_image/2.jpg";
import img3 from "../../../public/baner_image/3.jpg";
import img12 from "../../../public/baner_image/42.jpg";
import img22 from "../../../public/baner_image/52.jpg";
import img32 from "../../../public/baner_image/6.jpg";
import img14 from "../../../public/baner_image/7.jpg";
import img15 from "../../../public/baner_image/8.jpg";
import img16 from "../../../public/baner_image/9.jpg";
export default function App() {
  let image1 = img1;
  let image2 = img2;
  let image3 = img3;
  const size = useWindowSize();
  if (size.width <= 420) {
    image1 = img12;
    image2 = img22;
    image3 = img32;
  } else if (size.width <= 900 && size.width >= 420) {
    image1 = img14;
    image2 = img15;
    image3 = img16;
  }
  SwiperCore.use([Keyboard, Mousewheel]);
  return (
    <div className="  w-full  h-[720px] main  im   m-auto relative group mb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        keyboard={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="group"
      >
        <SwiperSlide>
          <div className="-mt-2 ">
            <Image fill alt="Banner_image" src={image1} placeholder="blur" />
          </div>
          <button className=" font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs  ">
            BUY NOW
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <video src="/VIDEOS/1.mp4" alt="Banner_image" loop muted autoPlay />
          </div>
          <TitleVideo
            t="Forged"
            st="in Fire"
            sst="Sculpted with Passion"
            sst1="The Timeless Tale of Dhokra"
            sst2=" Handicrafts"
          />
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs  ">
            BUY NOW
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="-mt-2">
            <Image fill alt="Banner_image" src={image2} placeholder="blur" />
          </div>
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs  ">
            BUY NOW
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  ">
            <video src="/VIDEOS/2.mp4" alt="Banner_image" loop muted autoPlay />
          </div>
          <TitleVideo
            t="Woven"
            st="from Nature"
            sst="Crafted by Hands"
            sst1="The Everlasting Elegance of Cane"
            sst2=" Handicrafts"
          />
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs ">
            BUY NOW
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="-mt-2 ">
            <Image fill alt="Banner_image" src={image3} placeholder="blur" />
          </div>
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs ">
            BUY NOW
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <video src="/VIDEOS/3.mp4" loop muted autoPlay />
          </div>
          <TitleVideo
            color="text-white"
            t="Woven"
            st="from Nature"
            sst="Crafted by Hands"
            sst1="The Everlasting Elegance of Cane"
            sst2=" Handicrafts"
          />
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs ">
            BUY NOW
          </button>
        </SwiperSlide>
        <Arrow />
      </Swiper>
    </div>
  );
}
