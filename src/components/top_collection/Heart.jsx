import React, { useState, useContext } from "react";
import CartContext from "@/store/Cart_context";
const Heart = (props) => {
  const [show_solid, setShow_solid] = useState(false);
  const cartCtx = useContext(CartContext);
  return (
    <span
      className={` duration-200  hover:scale-[1.3] hover:text-[var(--color-default)] 
              
               ${
                 show_solid ? "text-[var(--color-default)] " : "text-slate-800"
               }`}
      onClick={() => setShow_solid(!show_solid)}
    >
      {show_solid ? <props.icon2 /> : <props.icon1 />}
    </span>
  );
};

export default Heart;
