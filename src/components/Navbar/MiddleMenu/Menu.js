import menuItemsData from "./menuItemsData";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <nav className="bg-[#fff] py-6 z-[100] hidden lg:block">
      <ul className="flex m-0 p-0 list-none bg-[#fff]">
        {menuItemsData.map((data, i) => (
          <MenuItems key={i} menuItemsData={data} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
