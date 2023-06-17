import { MenuItems_data } from "./MenuData";
import MenuItems from "./MenuItems";
import Main_icons from "../temp/Main_icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "@/store/Cart_context";
import React, { useContext } from "react";
const Menu = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx[0].items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const cartState = () => {
    props.show();
  };
  return (
    <nav className="  text-[13px] font-semibold  text-black bg-white relative">
      <ul
        className="   pt-0 list-none  flex justify-center items-center 
      xl:items-start space-x-2 tracking-wider"
      >
        <div
          className=" hidden mt-12 right-36 absolute pb-[1px]  pr-[-10px]   
        xl:flex justify-center items-center"
        >
          {MenuItems_data.map((data, i) => (
            <MenuItems key={i} menuItemsData={data} sty={true} />
          ))}
        </div>
        <div
          className=" text-slate-800 relative
           text-[1.8rem]  max-[570px]:hidden   p-[10px] w-[160px]  ] "
        >
          <Main_icons
            setting="bg-white text-[16px] absolute top-[0.1rem] right-[-70px]
             text-black p-4 z-[510] w-40 rounded-b-sm shadow-b-md
             scale-0 duration-200  group-hover/s:scale-100 font-normal tracking-wide shadow-md"
            search=" xl:w-[370%] w-[200px] top-[15.5px] max-[740px]:w-[200px]  
            max-[740px]:top-[41px]
             right-[120%] max-[740px]:right-[-10%] max-[740px]:right-[-20%] "
            inp=" border-b-2  border-red-700 "
            s="border-slate-600 rounded-[5px] border-2 p-[4.8px]  text-base "
          >
            <div className="p-1" title="open cart" onClick={cartState}>
              <AiOutlineShoppingCart className="hover:text-red-700 duration-200" />
              <span
                className="bg-[var(--color-default)]  left-[15px] text-sm top-[-5px] absolute h-5 
          flex justify-center items-center text-white 
        rounded-full cursor-pointer w-5
        "
              >
                {numberOfCartItems}
              </span>
            </div>
          </Main_icons>
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
