import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch, AiFillSetting } from 'react-icons/ai';
import CartContext from '@/store/Cart_context';
import CartItems from './CartItems';

const Main_icons = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      <div className={` text-slate-500  cursor-pointer`}>
        {' '}
        <AiOutlineSearch />
      </div>
      <div className=" cursor-pointer p-4 relative group">
        <FaShoppingCart />
        <span
          className="bg-[var(--color-default)] left-7 text-sm top-3 absolute h-5 flex justify-center items-center text-white 
        rounded-full cursor-pointer w-5
        "
        >
          {numberOfCartItems}
        </span>
        <div className=" absolute bg-white hidden group-hover:block">
          <CartItems items={cartCtx.items} />
        </div>
      </div>

      <div className="p-4 cursor-pointer  group/i  relative ">
        <AiFillSetting />
        <div
          className={` absolute z-[106]  -right-4 opacity-0 ${props.className}`}
        >
          <ul className=" bg-white text-[16px] rounded-md text-black p-[.7rem]  w-40 ">
            <li className="m-1 text-lg">
              Language
              <ul>
                <li className="m-1 ml-2 text-base cursor-pointer">English</li>
                <li className="m-1 ml-2 text-base cursor-pointer">Fransh</li>
              </ul>
            </li>
            <li className="m-1 text-lg">
              <a href="#">Currency</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main_icons;
