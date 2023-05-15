import { GiHamburgerMenu } from "react-icons/gi";
import menuItemsData from "../MiddleMenu/menuItemsData";
import RightMenuItems from "./RightMenuItems";
import { useState } from "react";

const RightMenuMain = () => {
  const [showRightMenu, setShowRightMenu] = useState(false)
  return (
    <>
      <div className="block lg:hidden">
        <span className="text-[2rem] mr-8" onClick={() => setShowRightMenu(!showRightMenu)}><GiHamburgerMenu /></span>
      </div>
      <nav className="block lg:hidden absolute bg-[#fff] py-6 h-[100%] z-[100] w-[300px] p-3" style={{ left: showRightMenu ? "70%" : "100%" }}>
        <ul className="m-0 p-0 list-none bg-[#fff]">
          {menuItemsData.map((data, i) => (
            <RightMenuItems key={i} menuItemsData={data} />
          ))}
        </ul>
      </nav>
    </>
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