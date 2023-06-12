import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Arrow from "../Arrow";
import useWindowSize from "../useWindowSize";
export default function App() {
  let image1 = "/baner_image/1.jpg";
  let image2 = "/baner_image/2.jpg";
  let image3 = "/baner_image/3.jpg";
  const size = useWindowSize();
  if (size.width <= 420) {
    image1 = "/baner_image/42.jpg";
    image2 = "/baner_image/52.jpg";
    image3 = "/baner_image/6.jpg";
  } else if (size.width <= 900 && size.width >= 420) {
    image1 = "/baner_image/7.jpg";
    image2 = "/baner_image/8.jpg";
    image3 = "/baner_image/9.jpg";
  }

  return (
    <div className="  w-full  h-[650px] main  im   m-auto relative group mb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
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
            <Image
              fill
              alt="Banner_image"
              src={image1}
              layout="cover"
              loading="lazy"
            />
          </div>
          <button className=" font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs  ">
            BUY NOW
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <video src="/VIDEOS/1.mp4" alt="Banner_image" loop muted autoPlay />
          </div>
          <div className=" absolute z-[200] md:top-[20%] m w-2/6  left-[7%]  text-white ">
            <p className="md:text-[4rem] st  uppercase leading-tight ">
              <span className=" md:text-[5.5rem] t text-4xl tracking-widest">
                Forged
              </span>{" "}
              in Fire
            </p>
            <p className=" md:text-[2rem] sst  font-sans">
              Sculpted with Passion
            </p>
            <p className=" md:text-[1.6rem] block sst font-sans ">
              The Timeless Tale of Dhokra
            </p>
            <p className=" md:text-[1.6rem] sst font-sans "> Handicrafts</p>
          </div>
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs  ">
            BUY NOW
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="-mt-2">
            <Image fill alt="Banner_image" src={image2} loading="lazy" />
          </div>
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs  ">
            BUY NOW
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  ">
            <video src="/VIDEOS/2.mp4" alt="Banner_image" loop muted autoPlay />
          </div>
          <div className=" absolute z-[200] md:top-[20%] m w-2/6  left-[7%]  text-white ">
            <p className="md:text-[4rem] st  uppercase leading-tight ">
              <span className=" md:text-[5.5rem] t text-4xl tracking-widest">
                Forged
              </span>{" "}
              in Fire
            </p>
            <p className=" md:text-[2rem] sst  font-sans">
              Sculpted with Passion
            </p>
            <p className=" md:text-[1.6rem] block sst font-sans ">
              The Timeless Tale of Dhokra
            </p>
            <p className=" md:text-[1.6rem] sst font-sans "> Handicrafts</p>
          </div>
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs ">
            BUY NOW
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="-mt-2 ">
            <Image fill alt="Banner_image" src={image3} loading="lazy" />
          </div>
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs ">
            BUY NOW
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <video src="/VIDEOS/3.mp4" loop muted autoPlay />
          </div>
          <div className=" absolute z-[200] md:top-[20%] m w-2/6  left-[7%]  text-black ">
            <p className="md:text-[3.5rem] st  uppercase leading-tight ">
              <span className=" md:text-[5.5rem] t text-4xl tracking-widest">
                Woven
              </span>{" "}
              from Nature
            </p>
            <p className=" md:text-[2rem] sst  font-sans">Crafted by Hands</p>
            <p className=" md:text-[1.6rem] block sst font-sans ">
              The Everlasting Elegance of Cane
            </p>
            <p className=" md:text-[1.6rem] sst font-sans "> Handicrafts</p>
          </div>
          <button className="font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs ">
            BUY NOW
          </button>
        </SwiperSlide>
        <Arrow />
      </Swiper>
    </div>
  );
}
