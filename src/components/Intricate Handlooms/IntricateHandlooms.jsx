import React from "react";
import Banner from "../Banner/Banner";
import Title from "../Title";
import useWindowSize from "../useWindowSize";
import SwiperSection from "../SwiperSection";
const IntricateHandlooms = () => {
  const size = useWindowSize();
  let x = 3;
  if (size.width <= 960 && size.width >= 533) {
    x = 2;
  } else if (size.width <= 533) {
    x = 1;
  }
  return (
    <div id="intricate_handlooms" className=" relative w-full">
      <Banner
        img="bg-[url('/Handloom/Saree.jpg')] "
        title="Intricate Handlooms Collection"
        sup="Exclusive Offers"
        style="md:text-[4.5rem] text-[crimson]"
        bg="bg-red-50/40 "
      />
      <div
        id="mesmerica_arts"
        className=" py-8 w-full relative bg-white flex flex-col justify-center items-center"
      >
        <Title
          title="Handloom Collection"
          sup="Exclusive Gallery"
          style="my-4"
        />
        <div className="py-5 md:w-[80%] w-[95%] m-auto  flex flex-col justify-center items-center">
          <SwiperSection x={x} />
        </div>
        <div className="btn e_btn ">
          <a href="#intricate_handlooms">Explore More </a>
        </div>
      </div>
    </div>
  );
};

export default IntricateHandlooms;
