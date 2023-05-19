import MiddleMenuMain from "./MiddleMenu/MiddleMenuMain";
import RightMenuMain from "./RightMenu/RightMenuMain";
import LeftMenuMain from "./LeftMenu/LeftMenuMain";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white relative w-full z-[100] box-border">
      {/* <div className="flex justify-content items-center w-[2/4]">
        <span className="text-[2rem] mr-8"><GiHamburgerMenu/></span>
        <h1 className="text-[2rem]">LOGO</h1>
      </div> */}
      <div className="flex relative justify-between w-full">
        <div className="w-2/4 relative">
          <LeftMenuMain />
        </div>
        <div className="flex items-center justify-end w-2/4 relative">
          <MiddleMenuMain />
          <RightMenuMain />
        </div>
      </div>
    </div>
  );
};

export default Navbar;