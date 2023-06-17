import { AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import MenuItems from "../MiddleMenu/MenuItems";
import { leftData } from "./data";
import RightMenuItems from "../RightMenu/RightMenuItems";
const LeftMenuMain = (props) => {
  const [show, setShow] = useState(false);
  const showItem_Item = () => {
    setShow(!show);
  };

  return (
    <div
      className={`bg-white font-sans  top-0 h-full xl:overflow-visible overflow-auto text-black  z-10 left-0 fixed transition duration-700  ${
        props.show && "translate-x-0"
      } ${!props.show && "translate-x-[-100%]"} sm:w-[19rem] max-sm:w-[17rem] `}
    >
      <div
        className=" flex justify-start items-center  p-4 cursor-pointer border-b w-full"
        onClick={props.getBack}
      >
        <AiOutlineLeft className="text-xl font-bold " />
        <h2 className=" text-[24px] ml-1 font-medium font-mono">Back</h2>
      </div>
      <div className="  w-full  ">
        <ul>
          <div
            className=" hidden    
        xl:flex justify-center w-full   items-start flex-col"
          >
            {leftData.map((data, i) => (
              <MenuItems
                key={i}
                menuItemsData={data}
                style={" left-[100%] -top-[0px]"}
                sty={false}
              />
            ))}
          </div>
          <div
            className=" hidden    
        max-xl:flex justify-center w-full items-start flex-col"
          >
            {leftData.map((items, i) => (
              <RightMenuItems key={i} data={items} />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default LeftMenuMain;
