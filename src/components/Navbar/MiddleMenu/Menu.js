import { menu_data } from "./MenuData";
import MenuItems from "./MenuItems";
import Main_icons from "../temp/Main_icons";


const Menu = () => {
  return (
    <nav className="bg-[#fff] text-slate-600">
      <ul className=" m-0 p-0 list-none bg-[#fff] flex justify-center items-center  font-semibold space-x-2 tracking-wider text-sm">
        <div className=" hidden xl:flex justify-center items-center">
          {menu_data.map((data, i) => (
            <MenuItems key={i} menuItemsData={data} index={i} />
          ))}
        </div>
        <div className="flex justify-center items-center text-[1.6rem] max-[570px]:hidden">
          <Main_icons className={"group-hover/i:animate-moveUp1 top-[-15rem] right-[0px]"} className1={"group-hover/i:animate-moveUp1 top-[-15rem] right-[0px]"} />
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
