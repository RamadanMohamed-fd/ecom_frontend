import { useState, useEffect } from "react";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LeftMenuMain from "./LeftMenu/LeftMenuMain";
import Menu from "./MiddleMenu/Menu";
import RightMenuMain from "./RightMenu/RightMenuMain";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import Image from "next/image";
import FirstHead from "./temp/FirstHead";
import CartContext from "@/store/Cart_context";
import CartItems from "./temp/CartItems";

const Navbar = () => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx[0].items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const [showRightMenu, setShowRightMenu] = useState(false);
  const showLeftMenuHandler = () => {
    setShowLeftMenu(!showLeftMenu);
    setShowRightMenu(false);
    setShowCart(false);
  };

  const showRightMenuHandler = () => {
    setShowRightMenu(true);
    setShowLeftMenu(false);
    setShowCart(false);
  };
  const hideenRightMenuHandler = () => {
    setShowRightMenu(false);
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
    setShowLeftMenu(false);
    setShowRightMenu(false);
  };
  const showCartHandler1 = () => {
    setShowCart(!showCart);
    setShowLeftMenu(false);
    setShowRightMenu(false);
  };
  return (
    <div className=" relative ">
      <FirstHead show={showCartHandler1} />
      <div
        className={`${
          showMenu && offset > 100
            ? "fixed animate-topdown  flex flex-col z-[500] w-full bg-white"
            : ""
        } `}
      >
        <div
          className="flex justify-between  pt-2 shadow-md  w-full xl:items-start  
        px-[4.8%]  z-[250]"
        >
          <div
            className="flex justify-arounded  
          relative h-[100px]  items-center "
          >
            <div
              className="text-[1.8rem] -mr-1 cursor-pointer   
              duration-200 hover:text-[var(--color-default)] text-slate-600"
              onClick={showLeftMenuHandler}
            >
              <GiHamburgerMenu />
            </div>
            <div className=" ">
              <Image
                src="/CraftIndika.png"
                alt="Logo "
                width="300"
                height="200"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Menu show={showCartHandler} />
            <RightMenuMain
              show={showRightMenuHandler}
              hideen={hideenRightMenuHandler}
              menu={showRightMenu}
            />
            <LeftMenuMain show={showLeftMenu} getBack={showLeftMenuHandler} />
          </div>
        </div>
      </div>
      <div
        className={`top-0  right-0 z-[10000] fixed  group-hover:block duration-300`}
      >
        <CartItems
          show={showCart}
          cancle={() => setShowCart(false)}
          items={cartCtx[0].items}
          total={cartCtx[0].totalAmount}
        />
      </div>
      <div
        className={`  ${
          offset >= 100 ? "translate-x-0" : "translate-x-[100px]"
        } duration-700  text-center w-14  text-2xl flex flex-col justify-center items-center -mr-2 fixed top-[25%] right-0 z-[2000]`}
      >
        <div
          className=" p-1  rounded-s-md mb-2 cursor-pointer bg-[#eee]"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiOutlineSquaresPlus className="m-2 hover:text-red-700 duration-200" />
        </div>
        <div
          className="p-1 rounded-s-md  bg-[#eee] cursor-pointer relative group"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShoppingCart className="m-2 hover:text-red-700 duration-200" />
          <span
            className="bg-[var(--color-default)] left-5 text-xs top-2 absolute h-4 flex justify-center items-center text-white 
        rounded-full cursor-pointer w-4
        "
          >
            {numberOfCartItems}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
