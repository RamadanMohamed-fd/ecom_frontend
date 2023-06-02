import React from 'react';
import SliderHover from '../Intricate Handlooms/SliderHover';
import Image from 'next/image';
const SectionProduct = (props) => {
  return (
    <div>
      <div className=" shadow-lg  h-[250px]  m-auto rounded-lg overflow-hidden  cursor-pointer flex">
        <div className="group relative w-[100%] hover:scale-[1.1] h-full duration-500 ">
          <Image src={props.img} width={400} height={400} placeholder="blure" />
          <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
            <SliderHover />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className=" text-slate-600 font-semibold text-xl">{props.title}</h4>
      </div>
    </div>
  );
};

export default SectionProduct;
