import { AiTwotonePhone, AiOutlineDown } from "react-icons/ai";
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaRegIdBadge } from "react-icons/fa";
import Main_icons from "./Main_icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "@/store/Cart_context";
import React, { useContext, useState } from "react";
const FirstHead = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx[0].items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const cartState = () => {
    props.show();
  };
  const [color, setColor] = useState(false);
  return (
    <div>
      <div
        className={`flex justify-between items-center tracking-wider px-12 
        py-[0px] font-normal  text-[14px] bg-[var(--color-default)] 
        text-[var(--color-primary)]  max-[570px]:hidden relative w-full overflow-x-clip `}
      >
        <div className="flex justify-between items-center gap-6 ml-[4.3rem]">
          <p className="hidden xl:block">Welcome to CraftIndika</p>
          <div
            title="Phone number"
            className="xl:flex justify-evenly items-center hidden "
          >
            <AiTwotonePhone className="text-base" />
            <p className="ml-2">Call Us: +91-9827894737 </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 mr-[7%] w-[15rem]">
          <div className="flex justify-between  items-center   hover:text-gray-200 duration-300">
            <BsFillSuitHeartFill />
            <p className="ml-2  ">
              <a href="#">Wishlist</a>
            </p>
          </div>
          <div
            className="flex justify-between items-center relative group/t py-2.5 hover:text-slate-200
           duration-500  "
          >
            <BsFillPersonFill />
            <p className="mx-2 cursor-pointer ">My account</p>
            <ul
              className=" bg-white text-[16px] absolute top-[2.5rem] left-0 font-serif text-slate-800 px-3 py-3 z-[510] w-[145px] rounded-b-sm shadow-b-md
             scale-0 duration-500  group-hover/t:scale-100 font-normal tracking-wide shadow-lg  "
            >
              <li className="m-2.5 hover:text-red-700 duration-200  ">
                <a href="#" className="flex items-center gap-2">
                  <BiLogIn className="  " />
                  Login
                </a>
              </li>
              <li className="m-2.5 hover:text-red-700 duration-200  ">
                <a href="#" className="flex items-center gap-2">
                  <FaRegIdBadge className=" " />
                  Register
                </a>
              </li>
              <li className="m-2.5 hover:text-red-700 duration-200  ">
                <a href="#" className="flex items-center gap-2">
                  <BiLogOut className="" />
                  Logout
                </a>
              </li>
            </ul>
            <AiOutlineDown className="group-hover/t:rotate-[-90deg] duration-150" />
          </div>
        </div>
      </div>

      <div
        className="min-[570px]:hidden bg-[var(--color-secondary)] fixed   w-full bottom-0 
      flex justify-evenly items-center text-[24px] text-slate-400 cursor-pointer z-[200] "
      >
        <div className=" w-5/12 ">
          <Main_icons
            setting=" bg-[var(--color-secondary)] text-[16px] font- absolute bottom-10
             right-[-90px] font-serif text-white p-4 z-[510] w-40 rounded-b-sm
             scale-0 group-hover/s:scale-100 font-normal duration-500 tracking-wide"
            search="left-0 top-[-37px]"
          >
            <div className="p-1" onClick={cartState}>
              <AiOutlineShoppingCart
                className={`${
                  color && "text-red-700"
                } hover:text-red-700 duration-200 `}
                onClick={() => setColor(!color)}
              />
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
        <BsFillSuitHeartFill className="hover:text-red-700 duration-200" />

        <div className="p-4  group/i ">
          <BsFillPersonFill className="group-hover/i:text-red-700 duration-200" />
          <div className=" relative">
            <ul
              className=" bg-[var(--color-secondary)] text-[16px] absolute bottom-9 left-[-250%] font-serif text-white p-4 z-[510] w-36 rounded-b-sm
             scale-0 group-hover/i:scale-100 font-normal duration-500 tracking-wide"
            >
              <li className="m-2.5 hover:text-red-700 duration-200  ">
                <a href="#" className="flex items-center gap-2">
                  <BiLogIn className="  " />
                  Login
                </a>
              </li>
              <li className="m-2.5 hover:text-red-700 duration-200  ">
                <a href="#" className="flex items-center gap-2">
                  <FaRegIdBadge className=" " />
                  Register
                </a>
              </li>
              <li className="m-2.5 hover:text-red-700 duration-200  ">
                <a href="#" className="flex items-center gap-2">
                  <BiLogOut className="" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHead;
