import MenuItems from "./MenuItems";
import styles from "./middlemenu.module.css";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdownSubmenu" : "";
  return (
    <ul className={`${styles.dropdown} ${depthLevel > 1 ? styles.dropdownSubmenu : ""} ${dropdown ? styles.show : ""}`}>
      {" "}
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </ul>
  );
};

export default Dropdown;
