import React from 'react';
import Banner from '../Banner/Banner';
import Title from '../Title';
import useWindowSize from '../useWindowSize';
import SwiperSection from '../SwiperSection';
const ExquisiteHandicrafts = () => {
  const size = useWindowSize();
  let x = 3;
  if (size.width <= 960 && size.width >= 533) {
    x = 2;
  } else if (size.width <= 533) {
    x = 1;
  }
  return (
    <div id="exquisite_handicrafts">
      <Banner
        img="bg-[url('/Handicraft/DSC_08690.jpg')] "
        title=" Exquisite Handicrafts Collection"
        sup="Exclusive Offers"
        style="md:text-[4rem]"
        bg="bg-red-50/20 "
      />
      <div id="mesmerica_arts" className=" py-8 w-full relative bg-white">
        <Title
          title="Handicraft Collection"
          sup="Exclusive Gallery"
          style="my-4"
        />
        <div className="py-5 md:w-[80%]  max-[533px]:w-[75%] max-[370px]:w-[95%] m-auto  flex flex-col justify-center items-center">
          <SwiperSection x={x} />
          <div
            className=" bg-[var(--color-default)]  btn  shadow-xl px-5 py-2 rounded-lg  cursor-pointer
     w-fit text-white text-xl mt-4"
          >
            <a href="#intricate_handlooms">Explore More </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExquisiteHandicrafts;
