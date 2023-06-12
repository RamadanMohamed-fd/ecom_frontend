import { TbSquareRoundedPlus, TbSquareRoundedMinus } from "react-icons/tb";
import CartContext from "@/store/Cart_context";
import { useContext } from "react";

const CartAmount = ({ item }) => {
  const cartCtx = useContext(CartContext);

  const AddHandler = () => {
    cartCtx[0].addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
      image: item.img1,
    });
  };
  const RemoveHandler = (e) => {
    if (item.amount === 1) {
      e.preventDefault();
    } else {
      cartCtx[0].removeItem(item.id);
    }
  };
  return (
    <div className=" flex justify-evenly   items-center ">
      <button
        onClick={AddHandler}
        className="  text-xl  duration-200 cursor-pointer hover:text-[var(--color-default)]"
      >
        <TbSquareRoundedPlus />
      </button>
      <span> {item.amount}</span>
      <button
        onClick={RemoveHandler}
        className=" text-xl cursor-pointer duration-200 hover:text-[var(--color-default)]"
      >
        <TbSquareRoundedMinus />
      </button>
    </div>
  );
};

export default CartAmount;
