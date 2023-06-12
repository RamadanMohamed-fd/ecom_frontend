import React, { useContext, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { MdLanguage, MdTranslate } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
const Main_icons = (props) => {
  const [color, setColor] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className={`flex items-center justify-between  ${props.style}  `}>
      <div className="cursor-pointer   group/sea ">
        <div
          className={`  ${color && "text-red-700"}  `}
          onClick={() => setShowSearchBar(!showSearchBar)}
        >
          <TbSearch
            className={`${
              color && "text-red-700"
            } hover:text-red-700 duration-200`}
            onClick={() => setColor(!color)}
          />
        </div>
        <div
          className={`absolute ${
            showSearchBar ? "scale-100" : "scale-0"
          } duration-500 w-full flex ${props.search}  `}
        >
          <input
            type="text"
            placeholder="search..."
            className={` ${props.inp} w-[100%]   bottom-[55px] text-slate-900 outline-none  
            py-[6px] text-[14px] max-[570px]:text-[14px] max-[570px]:py-2 
            max-[570px]:text-white min-[570px]:bg-transparent 
            max-[570px]:bg-[var(--color-secondary)] px-5`}
          />
          {/* <button
            type="submit"
            className="w-[15%] font-mono bg-[var(--color-default)] text-white btn  text-lg "
          >
            Submit
          </button> */}
        </div>
      </div>
      <div className=" cursor-pointer relative group">
        {props.children}

        {/* <div className=" absolute  top-[90px] right-[-300%] w-[280px] h-[100vh]  group-hover:block">
          <CartItems items={cartCtx.items} counter={numberOfCartItems} />
        </div> */}
      </div>

      <div className=" cursor-pointer relative group/s font-serif">
        <div className="p-1">
          <MdOutlineSettings className="group-hover/s:text-red-700 duration-500 group-hover/s:rotate-90" />
        </div>
        <div className={` absolute  z-[500]  `}>
          <ul className={` ${props.setting} text-slate-800`}>
            <li className="m-2.5  ">
              <span className="hover:text-red-700 duration-200 flex items-center gap-2">
                <MdLanguage />
                Language
              </span>
              <ul>
                <li className="m-2.5 hover:text-red-700 duration-200">
                  <a href="#" className="flex items-center gap-2">
                    <MdTranslate className=" " />
                    English
                  </a>
                </li>
                <li className="m-2.5 hover:text-red-700 duration-200">
                  <a href="#" className="flex items-center gap-2">
                    <MdTranslate className=" " />
                    Fransh
                  </a>
                </li>
              </ul>
            </li>
            <li className="m-2.5 hover:text-red-700 duration-200">
              <a href="#" className="flex items-center gap-2">
                <BsCurrencyDollar className=" " />
                Currency
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main_icons;
