import React, { useContext, useState } from "react";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { TbSquareRoundedPlus, TbSquareRoundedMinus } from "react-icons/tb";

import Heart from "./Heart";
import CartContext from "@/store/Cart_context";

const Cart = ({ item }) => {
  const cartCtx = useContext(CartContext);
  const [stateClick, setStateClick] = useState(true);

  const clickHandler = () => {
    if (stateClick) {
      cartCtx[0].addItem({
        id: item.id,
        name: item.name,
        amount: 1,
        price: item.price,
        image: item.img1,
        cartState1: false,
      });
      setStateClick(false);
    } else {
      cartCtx[0].removeItemALL(item.id);
      setStateClick(true);
    }
  };

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-5 text-3xl"
        onClick={clickHandler}
      >
        <Heart
          icon1={BsFillCartPlusFill}
          icon2={BsFillCartCheckFill}
          show={stateClick}
        />
      </div>
    </div>
  );
};

export default Cart;
