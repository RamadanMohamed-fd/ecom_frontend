import React from "react";

const TitleVideo = (props) => {
  return (
    <div
      className={`${props.color} text-white absolute z-[200] md:top-[20%] max-[420px]:top-[60%] max-[360px]:top-[50%]
       top-[20%] left-10 max-[360px]:left-4  p-4  w-max  md:left-[7%]
       `}
    >
      <p className="md:text-[4rem] text-4xl md:mb-[-30px]  uppercase md:leading-loose">
        <span className=" md:text-[5.5rem] t block  text-4xl tracking-widest">
          {props.t}
        </span>
        {props.st}
      </p>
      <p className=" md:text-[2rem]  font-sans">{props.sst}</p>
      <p className=" md:text-[1.6rem] font-sans ">{props.sst1}</p>
      <p className=" md:text-[1.6rem] font-sans ">{props.sst2}</p>
    </div>
  );
};

export default TitleVideo;
