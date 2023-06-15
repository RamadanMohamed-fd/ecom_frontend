import Image from "next/image";
import React from "react";
import image1 from "../../../public/section_images/1.jpg";
import image2 from "../../../public/section_images/2.jpg";
import image3 from "../../../public/section_images/3.jpg";
import image4 from "../../../public/section_images/4.jpg";
import image5 from "../../../public/section_images/5.jpg";
import image6 from "../../../public/section_images/6.jpg";
import image7 from "../../../public/section_images/7.jpg";
import image8 from "../../../public/section_images/8.jpg";
import image9 from "../../../public/section_images/9.jpg";
const Banner = (props) => {
  return (
    <div className=" w-full bg-white ">
      <div className="-mt-2 ">
        <Image
          width={1920}
          height={1080}
          alt="Banner_image"
          src={image1}
          placeholder="blur"
        />
      </div>
      <button className=" font-mono b tracking-wider absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs  ">
        BUY NOW
      </button>
    </div>
  );
};

export default Banner;

{
  /* <div
className={`flex items-center bg-center   justify-center relative md:py-40 sm:py-24 bg-no-repeat bg-cover  max-sm:py-20   ${props.img} bg-fixed`}
>
<div className="flex items-center  justify-center  ">
  <div
    className={`flex flex-col items-center max-sm:px-2 p-10 w-[70%] max-lg:w-[95%] rounded-xl shadow-xl justify-center  text-center border-2 ${props.bg}`}
  >
    <h2
      className={`font-serif f mb-10 max-sm:mb-4  max-md:text-[3rem] max-sm:text-[1.8rem] font-semibold ${props.style} uppercase`}
    >
      {" "}
      {props.title}
    </h2>
    <h2 className=" font-bold  mb-2 font-mono text-red-700 text-center md:text-[2rem] max-md:text-[1.8rem] max-sm:text-[1.3rem] uppercase">
      {props.sup}
    </h2>
    <div className="w-fit px-6 py-2 tracking-wider bg-[var(--color-default)] font-mono text-white text-xl btn shadow-xl ">
      Shop Now
    </div>
  </div>
</div>
</div> */
}
