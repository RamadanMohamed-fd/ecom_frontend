import { useState } from "react";
import { HiPlus } from "react-icons/hi"

const LeftMenuItems = ({ menuItemsData }) => {
  console.log(menuItemsData)
  const [open, setOpen] = useState(false);
  return (
    <li className="relative cursor-pointer px-3 py-3">
      <div className="flex justify-between items-center">
        <h3 className="uppercase font-semibold" onClick={() => setOpen(!open)}>{menuItemsData.name}</h3>
        {
          menuItemsData.category_children?.length > 0 && (
            <span><HiPlus /></span>
          )
        }
      </div>
      <ul className={"z-[100] bg-[#fff] list-none font-extralight"}>
        {menuItemsData?.category_children &&
          open &&
          menuItemsData.category_children.map((data, i) => (
            <LeftMenuItems key={i} menuItemsData={data} />
          ))}
      </ul>
    </li>
  );
};

export default LeftMenuItems;