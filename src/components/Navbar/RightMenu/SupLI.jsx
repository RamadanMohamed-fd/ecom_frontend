import React, { useState } from "react";
import ListItem from "../LeftMenu/ListItem";
import SubRight from "./SubRight";

const SupLI = (props) => {
  const [openSup, setOpenSup] = useState(false);
  return (
    <li key={props.index} className={`parent1 cursor-pointer py-1  relative `}>
      <a className="flex justify-start  items-center " href={props.data.url}>
        <div
          className={` flex  justify-betwee w-[80%] items-center hover:text-red-700  ${
            openSup && "text-red-700"
          }`}
          onClick={() => setOpenSup(!openSup)}
        >
          <ListItem data={props.data} show={openSup} />
        </div>
      </a>
      <SubRight data={props.data} show={openSup} style="ml-3" />
    </li>
  );
};

export default SupLI;
