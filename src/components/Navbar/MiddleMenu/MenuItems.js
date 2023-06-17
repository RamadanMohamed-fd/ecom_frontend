import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { TbHomeLink } from "react-icons/tb";
import Sup from "../Sub";

const MenuItems = ({ menuItemsData, style, sty }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={`relative  font-sans  w-full after:content-[''] after:absolute after:h-[2px]
       after:bg-red-700 
      hover:after:w-[100%] after:left-0  after:w-0 after:duration-500 
      before:content-[''] before:absolute before:h-[2px]
      before:bg-red-700 before:bottom-0 
      hover:before:w-[100%] before:right-0  before:w-0 before:duration-500 
      text-[14px] text-slate-800  cursor-pointer py-2 px-1 mt-3 ${
        sty
          ? "hover:border-x-2 after:top-0 before:right-0 hover:border-red-700 border-x-2 border-transparent "
          : "hover:after:w-0 after:left-0 before:left-4 hover:before:w-[30%]"
      } group`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={`flex items-center justify-start `}>
        <p className="uppercase pr-[1px] ml-4 ">{menuItemsData.title}</p>
        {sty && (
          <div
            className={` text-xl p-[1px] ${
              open && "rotate-180 "
            } duration-300  `}
          >
            <MdOutlineKeyboardArrowDown />
          </div>
        )}
      </div>
      <ul
        className={`${
          open ? " scale-100" : " scale-0"
        }  absolute  z-[200] bg-white   
        rounded-b-sm   font-sans  text-[14px] text-slate-800 duration-500 tracking-widest
           top-[39px] left-0 w-max  ${style} `}
      >
        {menuItemsData["sup"] &&
          menuItemsData.sup.map((data, i) => (
            <li
              key={i}
              className={`px-4 py-[10px] relative parent text-slate-800 group/i duration-200`}
            >
              <a
                className={`flex  relative items-center group-hover/i:text-red-700`}
                href={data.url}
              >
                <TbHomeLink className="mr-2 text-lg" />
                {data.title}
                {data["sup"] && (
                  <MdKeyboardArrowRight
                    className={` text-lg group-hover/i:rotate-90 duration-200`}
                  />
                )}
                {!data["sup"] && (
                  <MdKeyboardArrowRight className={` opacity-0`} />
                )}
              </a>
              <Sup data={data} />
            </li>
          ))}
        {menuItemsData["sup1"] && (
          <div className="grid grid-cols-3 grid-rows-2 w-[780px] bg-white  -mt-4 ml-0 h-[410px] pl-10 pt-5 -m-3 gap-y-[65px] ">
            {menuItemsData.sup1.map((data, i) => (
              <li key={i} className="  ">
                <h5>{data.title}</h5>
                <Sup data={data} />
              </li>
            ))}
          </div>
        )}
      </ul>
    </li>
  );
};

export default MenuItems;
