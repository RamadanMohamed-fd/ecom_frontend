import { GiHamburgerMenu } from "react-icons/gi";
import menuItemsData from "../MiddleMenu/menuItemsData";
import RightMenuItems from "./RightMenuItems";
import { useState } from "react";

// Icons import
import { FiSettings } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const RightMenuMain = () => {
  const [showRightMenu, setShowRightMenu] = useState(false)
  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="absolute lg:hidden w-screen h-screen bg-gray-500/50 -z-100" style={{ display: showRightMenu ? "block" : "none" }}>
        </div>
        <div className="flex items-center">
          <div>
            <span className="text-[2rem] mr-6 hidden sm:flex cursor-pointer"><FiSettings /></span>
          </div>
          <div>
            <span className="text-[2rem] mr-6 hidden sm:flex cursor-pointer"><BiSearch /></span>
          </div>
          <div>
            <span className="text-[2rem] mr-6 hidden sm:flex cursor-pointer"><RiDeleteBin6Line /></span>
          </div>
          <div className="flex lg:hidden -z-200">
            <span className="text-[2rem] mr-6 cursor-pointer" onClick={() => setShowRightMenu(!showRightMenu)}><GiHamburgerMenu /></span>
          </div>
        </div>
      </div>
      {/* <div className="relative w-[50%] flex lg:hidden justify-end"> */}
      <nav className="block lg:hidden absolute bg-[#fff] z-[100] w-[350px] top-0 left-[100%]" style={{ transform: showRightMenu ? "translateX(-350px)" : "translateX(350px)" }}>
        <div className="border-b-2 p-3" onClick={() => setShowRightMenu(!showRightMenu)}>BACK NAVBAR</div>
        <ul className="m-0 p-0 list-none bg-[#fff]">
          {menuItemsData.map((data, i) => (
            <RightMenuItems key={i} menuItemsData={data} />
          ))}
        </ul>
      </nav>
      {/* </div> */}
    </div>
  );
};

export default RightMenuMain;


// import React from 'react'
// import menuItemsData from '../MiddleMenu/menuItemsData'
// import RightMenuItems from "./RightMenuItems"

// const RightMenuMain = () => {
//   return (
//     <div>
//       <RightMenuItems menuItemsData={menuItemsData} />
//     </div>
//   )
// }

// export default RightMenuMain