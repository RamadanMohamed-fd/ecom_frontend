import { useState, useEffect } from "react";
import LeftMenuMain from "./LeftMenu/LeftMenuMain";
import Menu from "./MiddleMenu/Menu";
import RightMenuMain from "./RightMenu/RightMenuMain";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import FirstHead from "./temp/FirstHead";

const Navbar = () => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const showLeftMenuHandler = () => {
    setShowLeftMenu(!showLeftMenu);
  }

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`${offset >= 300 && " fixed animate-topdown flex flex-col z-[500] w-full "}  `}>
      {offset >= 300 && <FirstHead />}
      <div className="flex justify-between py-3 shadow-lg right-0 left-0 w-full items-center bg-white px-[4.8%]  z-[250]">
        <div className="flex max-[570px]:justify-between w-3/4 items-center ml-[3%] ">
          <span className="text-[1.8rem]  cursor-pointer duration-200 hover:text-[var(--color-default)] text-slate-600" onClick={showLeftMenuHandler}><GiHamburgerMenu /></span>
          <Image src="/CraftIndika.png" alt="Logo " width="220" height="0"></Image>
        </div>

        <div className="flex">
          <RightMenuMain />
          <Menu />
          <LeftMenuMain show={showLeftMenu} getBack={showLeftMenuHandler} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;