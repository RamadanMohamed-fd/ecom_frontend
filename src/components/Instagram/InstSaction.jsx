import React from "react";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
import image from "../../../public/instagramImage.avif";
const InstSaction = () => {
  return (
    <div className=" w-full h-full  border-2 shadow-sm rounded-lg  relative group cursor-pointer">
      <Image
        width={464}
        higth={580}
        alt="instagram image"
        placeholder="blur"
        src={image}
      />
      <span
        className="absolute top-3 left-3 max-sm:text-[1.5rem] text-[2.5rem] 
      group-hover:top-[50%] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] 
      group-hover:left-[50%] group-hover:text-red-400 text-white max-sm:group-hover:text-[6rem] 
      group-hover:text-[8rem] group-hover:-rotate-90 group-hover:scale-50 duration-[0.7s] 
      ease-in-out"
      >
        <BsInstagram />
      </span>
    </div>
  );
};

export default InstSaction;
