import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import { Home, Arts, Handicrafts, Handlooms, Trending, Resource } from "./MenuData";
const sub = [Home, Arts, Handicrafts, Handlooms, Trending, Resource]
const MenuItems = ({ menuItemsData, index }) => {
  const [open, setOpen] = useState(false);
  const [openSup, setOpenSup] = useState(false);
  return (
    <li className="relative  cursor-pointer py-3 " onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="flex items-center justify-center pr-3 ">
        <p className="uppercase pr-2 ">{menuItemsData}</p>
        <MdOutlineKeyboardArrowDown />
      </div>
      <ul className={`z-[201] absolute  bg-[#fff] p-4 w-[200px] rounded-md mt-2 ml-0 ${open ? "block" : "hidden"} p-4 text-[14px] duration-1000 `} >
        {
          sub[index].map((data, i) => (
            <li key={i} className="py-2  underline group/i hover:no-underline duration-200 hover:text-[var(--color-default)]">
              <a className="flex justify-between  relative items-center" href={data.url}>{data.title} {data["sup"] && <MdKeyboardArrowRight />}  </a>
              {data["sup"] &&
                <ul className={`z-[201] absolute  bg-[#fff] p-4 w-[150px] left-[90%]  rounded-md mt-2 ml-0 hidden top-[60%] group-hover/i:block text-[14px] duration-1000 `}>
                  {
                    data["sup"].map((s, index) => (
                      <li key={index} className=" cursor-pointer py-2 "><a className="flex justify-between relative items-center" href={s.url}>{s.title}</a></li>
                    ))
                  }
                </ul>
              }

            </li>
          ))
        }
      </ul>
    </li>
  );
};

export default MenuItems;
