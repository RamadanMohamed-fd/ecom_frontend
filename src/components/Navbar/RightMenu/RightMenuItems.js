import { useState } from "react";
import ListItem from "../LeftMenu/ListItem";
import SubRight from "./SubRight";
const RightMenuItems = ({ data, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className=" cursor-pointer parent1 relative w-full  px-6 py-2">
      <div
        className={` text-md -ml-8    h-fit  tracking-wider
         text-gray-700 hover:text-red-700 font-semibold ${
           open && "text-red-700"
         }  `}
        onClick={() => setOpen(!open)}
      >
        <ListItem data={data} show={open} />
      </div>
      {<SubRight data={data} show={open} style="-ml-3" />}
    </li>
  );
};

export default RightMenuItems;
