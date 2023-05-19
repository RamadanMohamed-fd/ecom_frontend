import { GiHamburgerMenu } from "react-icons/gi";
import menuItemsData from "../MiddleMenu/menuItemsData";
import LeftMenuItems from "./LeftMenuItems";
import { useEffect, useState } from "react";

const LeftMenuMain = () => {
    const [showRightMenu, setShowRightMenu] = useState(false)

    // useEffect(() => {
    //     function handleClick() {
    //         if(showRightMenu){
    //             console.log("entered")
    //             setShowRightMenu(false);
    //         }
    //     }
    //     document.addEventListener('click', handleClick);
    //     return () => {
    //       document.removeEventListener('click', handleClick);
    //     };
    //   }, []);

    return (
        <div className="relative w-[100%]">
            <div className="absolute w-screen h-screen bg-gray-500/50 -z-100 lg:hidden" style={{ display: showRightMenu ? "block" : "none" }}></div>
            <div className="flex items-center py-4 -z-200">
                <span className="text-[2rem] mx-6 flex -z-200 cursor-pointer" onClick={() => setShowRightMenu(!showRightMenu)}><GiHamburgerMenu /></span>
                <img src="https://craftindika.com/wp-content/uploads/2022/05/300x90.png" className="h-[60px] object-contain -ml-8 sm:m-0" />
            </div>
            <nav className="block absolute bg-[#fff] z-[100] top-0 left-0 w-[350px] z-100" style={{ transform: showRightMenu ? "translateX(0px)" : "translateX(-350px)" }}>
                <div className="border-b-2 p-3" onClick={() => setShowRightMenu(!showRightMenu)}>BACK NAVBAR</div>

                <ul className="m-0 p-0 list-none bg-[#fff]">
                    {menuItemsData.map((data, i) => (
                        <LeftMenuItems key={i} menuItemsData={data} />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default LeftMenuMain;