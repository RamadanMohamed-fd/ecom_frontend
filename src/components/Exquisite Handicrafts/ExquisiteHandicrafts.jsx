import React from "react";
import Image from "next/image";
import image1 from "../../../public/section_images/2.jpg";
import image2 from "../../../public/section_images/5.jpg";
import image3 from "../../../public/section_images/9.jpg";
import Title from "../Title";
import useWindowSize from "../useWindowSize";
import SwiperSection from "../SwiperSection";
const ExquisiteHandicrafts = () => {
  const size = useWindowSize();
  let image = image1;
  let w = 1920;
  let h = 1080;
  let x = 3;
  if (size.width <= 960 && size.width > 533) {
    x = 2;
    image = image2;
    w = 1280;
    h = 720;
  } else if (size.width <= 533) {
    x = 1;
    image = image3;
    w = 520;
    h = 480;
  }
  return (
    <div id="exquisite_handicrafts" className=" w-full relative">
      <div className=" w-full  bg-white  ">
        <div className=" flex justify-center relative ">
          <Image
            width={w}
            height={h}
            alt="Exquisite Handicrafts Collection"
            src={image}
            placeholder="blur"
          />
          <button
            className=" font-mono b tracking-wider absolute btn z-[100]
           top-[80%] left-[15%]  bg-[var(--color-default)]
           text-white font-bold px-4 py-2 max-sm:py-[7px] max-[533px]:top-[93%] max-[533px]:left-auto text-lg max-sm:text-xs  "
          >
            BUY NOW
          </button>
        </div>
      </div>

      <div
        id="mesmerica_arts"
        className=" py-8 w-full relative bg-white flex flex-col justify-center items-center"
      >
        <Title
          title="Handicraft Collection"
          sup="Exclusive Gallery"
          style="my-4"
        />
        <div className="py-5 md:w-[80%] w-[95%] m-auto  flex flex-col justify-center items-center">
          <SwiperSection x={x} />
        </div>
        <div className=" e_btn  btn  ">
          <a href="#intricate_handlooms">Explore More </a>
        </div>
      </div>
    </div>
  );
};

export default ExquisiteHandicrafts;
