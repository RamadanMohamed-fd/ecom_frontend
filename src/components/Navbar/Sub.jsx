import React from "react";
import Image from "next/image";
import { TbHomeLink } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sub = (props) => {
  return (
    <>
      {props.data["sup"] && (
        <ul
          className={`z-[201] absolute font-sans  text-[14px] text-slate-800 bg-white px-4 py-[2px] left-[100%]  
                rounded-b-sm mt-1 ml-0 hidden  top-2 child w-max `}
        >
          {props.data["sup"].map((s, index) => (
            <li
              key={index}
              className=" cursor-pointer py-1 relative parent group/ii duration-200 "
            >
              <a
                className="flex justify-start relative  items-center "
                href={s.url}
              >
                <TbHomeLink className="mr-2 text-lg" />
                <div className="flex justify-between items-center">
                  {s.title}
                  {s["sup"] && (
                    <MdKeyboardArrowRight className=" text-lg c duration-200" />
                  )}
                  {!s["sup"] && (
                    <MdKeyboardArrowRight className={` opacity-0`} />
                  )}
                </div>
              </a>
              <Sub data={s} />
            </li>
          ))}
        </ul>
      )}
      {props.data["sup1"] && (
        <ul className={`font-sans  text-[14px] text-slate-800 `}>
          {props.data["sup1"].map((s, index) => (
            <li
              key={index}
              className=" cursor-pointer py-2 relative parent group/ii duration-200 after:content-[''] w-full after:absolute after:h-[2px]
              after:bg-red-700 after:bottom-0 
             hover:after:w-[25%] after:left-0  after:w-0 after:duration-300"
            >
              <a
                className="flex justify-start relative  items-center "
                href={s.url}
              >
                <div className="flex justify-between items-center">
                  {s.title}
                </div>
              </a>
              <Sub data={s} />
            </li>
          ))}
        </ul>
      )}
      {props.data["image"] && (
        <ul>
          <li>
            <a href="#">
              <Image
                src={props.data.image}
                width={223}
                height={390}
                alt="image"
                className=""
              />
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Sub;
