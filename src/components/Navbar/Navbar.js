import Menu from "./MiddleMenu/Menu";
import RightMenuMain from "./RightMenu/RightMenuMain";
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white px-12 relative">
      <div className="flex justify-content items-center">
        <span className="text-[2rem] mr-8"><GiHamburgerMenu/></span>
        <h1 className="text-[2rem]">LOGO</h1>
      </div>
      <div className="flex">
        <Menu />
        <RightMenuMain />
      </div>
    </div>
  );
};

export default Navbar;