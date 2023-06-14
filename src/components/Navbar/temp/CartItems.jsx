import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import CartAmount from "@/components/top_collection/CartAmount";
const CartItems = (props) => {
  const cancleHandler = () => {
    props.cancle(false);
  };

  return (
    <div
      className={`${
        props.show ? "w-[270px] min-[350px]:w-[300px] " : "w-0"
      } duration-500 bg-white relative  overflow-auto    h-[100vh] `}
    >
      <div className=" absolute top-2 right-2 text-xl  hover:scale-110 duration-100 cursor-pointer hover:text-[var(--color-default)] ">
        <span onClick={cancleHandler}>
          <MdOutlineCancel />
        </span>
      </div>
      <ul className="flex flex-wrap justify-center divide-y-2 p-2 w-[90%]  items-center text-[16px] text-black ">
        {props.items.map((item) => (
          <li key={item.id} className=" w-full p-3  ">
            <div className="flex justify-between items-center">
              <Image
                src={item.image}
                alt="product_image"
                width={100}
                height={100}
                loading="lazy"
              />
              <div className=" flex flex-col justify-between  ">
                <p className="pb-1">{item.name}</p>
                <p className="pb-1 text-red-400">${item.price}</p>
                <CartAmount item={item} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {props.items.length === 0 && (
        <p className=" text-center text-2xl  pt-6">No product added</p>
      )}
      <div className=" fixed bottom-0 w-[280px] p-1  flex bg-white shadow-md justify-between pl-2 items-center">
        <div className="">
          <span className="pr-4">Total:</span>
          <span className=" text-red-400">${props.total}</span>
        </div>
        <button className="bg-[var(--color-default)] font-mono btn py-2 px-3 tracking-wider text-white ">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
