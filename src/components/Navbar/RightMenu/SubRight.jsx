import React, { useState } from "react";
import SupLI from "./SupLI";
import Image from "next/image";
const SubRight = (props) => {
  return (
    <>
      {props.data["sup"] && (
        <ul
          className={` font-sans hidden   ${props.show && "child1"}
          text-[14px] text-slate-800 bg-gray-50 font-normal ${props.style} `}
        >
          {props.data["sup"].map((s, index) => (
            <SupLI data={s} index={index} key={index} />
          ))}
        </ul>
      )}
      {props.data["sup1"] && (
        <ul
          className={` font-sans hidden w-full ${props.show && "child1"}
          text-[14px] lowercase text-slate-800 bg-gray-50 font-normal ${
            props.style
          } `}
        >
          {props.data["sup1"].map((s, index) => (
            <SupLI data={s} index={index} key={index} />
          ))}
        </ul>
      )}
      {/* {props.data["image"] && (
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
      )} */}
    </>
  );
};

export default SubRight;
