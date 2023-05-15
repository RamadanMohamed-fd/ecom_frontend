import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"

const MenuItems = ({ menuItemsData }) => {
  console.log(menuItemsData)
  const [open, setOpen] = useState(false);
  return (
    <li className="relative cursor-pointer px-3 py-3" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="flex items-center justify-center pr-6">
        <p className="uppercase">{menuItemsData.title}</p>
        {
          menuItemsData?.subMenuItems?.length > 0 && (
            menuItemsData?.depth >= 1 ? (
              <span><MdKeyboardArrowRight /></span>
            ) : <span><MdOutlineKeyboardArrowDown /></span>
          )
        }
      </div>
      {/* {console.log(menuItemsData.depth, "-->", menuItemsData.title)} */}
      <ul className={"flex flex-col z-[100] absolute bg-[#fff] list-none w-auto text-sm" + (menuItemsData.depth >= 1 ? " left-[100%]" : " left-[0%]") + (menuItemsData.depth >= 1 ? " top-[20%]" : " top-[100%]")} >

        {menuItemsData?.subMenuItems &&
          open &&
          menuItemsData.subMenuItems.map((data, i) => (
            <MenuItems key={i} menuItemsData={data} />
          ))}
      </ul>
    </li>
  );
};

export default MenuItems;