import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { TbHomeLink } from "react-icons/tb";
import {
  Home,
  Arts,
  Handicrafts,
  Handlooms,
  Trending,
  Resource,
} from "./MenuData";
const sub = [Home, Arts, Handicrafts, Handlooms, Trending, Resource];
const MenuItems = ({ menuItemsData, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="relative  font-sans after:content-[''] after:absolute after:h-[2px]
       after:bg-red-700 after:top-0 
      hover:after:w-[100%] after:left-0  after:w-0 after:duration-500 
      before:content-[''] before:absolute before:h-[2px]
      before:bg-red-700 before:bottom-0 
      hover:before:w-[100%] before:right-0  before:w-0 before:duration-500 
      text-[14px] text-slate-800  cursor-pointer py-2 px-1 mt-3 hover:border-x-2 hover:border-red-700 border-x-2 border-transparent group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center justify-center  ">
        <p className="uppercase pr-[1px] ml-4 ">{menuItemsData}</p>
        <div
          className={` text-xl p-[1px] ${open && "rotate-180 "} duration-300  `}
        >
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
      <ul
        className={`${
          open ? " scale-100" : " scale-0"
        }  absolute  z-[200]  p-3   
        rounded-b-sm   font-sans  text-[14px] text-slate-800 duration-500 tracking-widest
           top-[39px] left-0 w-max bg-white  `}
      >
        {sub[index].map((data, i) => (
          <li
            key={i}
            className="px-2 py-[10px] text-slate-800 group/i duration-200"
          >
            <a
              className="flex  relative items-center group-hover/i:text-red-700"
              href={data.url}
            >
              <TbHomeLink className="mr-2 text-lg" />
              {data.title}
              {data["sup"] && (
                <MdKeyboardArrowRight className=" text-lg group-hover/i:rotate-90 duration-200" />
              )}{" "}
            </a>
            {data["sup"] && (
              <ul
                className={`z-[201] absolute font-sans  text-[14px] text-slate-800 bg-white px-4 py-[6px] w-fit left-[90%]  
                rounded-b-sm mt-1 ml-0 hidden top-[60%] group-hover/i:block 
                duration-1000 `}
              >
                {data["sup"].map((s, index) => (
                  <li
                    key={index}
                    className=" cursor-pointer py-2   duration-200 "
                  >
                    <a
                      className="flex justify-between relative items-center hover:text-red-700"
                      href={s.url}
                    >
                      <TbHomeLink className="mr-2 text-lg" />
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MenuItems;
