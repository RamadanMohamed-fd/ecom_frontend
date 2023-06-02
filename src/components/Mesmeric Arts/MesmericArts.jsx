import React from 'react';
import Banner from '../Banner/Banner';
import Title from '../Title';
import useWindowSize from '../useWindowSize';
import SwiperSection from '../SwiperSection';
const MesmericArts = () => {
  const size = useWindowSize();
  let x = 3;
  if (size.width <= 960 && size.width >= 533) {
    x = 2;
  } else if (size.width <= 533) {
    x = 1;
  }
  return (
    <>
      <Banner
        img="bg-[url('/Art/Art1.jpg')]"
        title="Mesmeric Arts Collection"
        sup="Exclusive Offers"
        style="md:text-[5rem]"
        bg="bg-red-50/50"
      />
      <div id="mesmerica_arts" className=" py-8 w-full relative bg-white">
        <Title title="Arts Collection" sup="Exclusive Gallery" style="my-4" />
        <div className="py-5 md:w-[80%]  max-[533px]:w-[75%] max-[370px]:w-[95%] m-auto  flex flex-col justify-center items-center">
          <SwiperSection x={x} />
          <div
            className="   btn  shadow-xl px-5 py-2 rounded-lg  cursor-pointer
     w-fit bg-[var(--color-default)] text-white text-xl mt-4"
          >
            <a href="#intricate_handlooms">Explore More </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MesmericArts;
