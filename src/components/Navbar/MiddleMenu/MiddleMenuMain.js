import menuItemsData from "./menuItemsData";
import MenuItems from "./MenuItems";
import styles from "./middlemenu.module.css";

const MiddleMenuMain = () => {
    return (
        <nav className={styles.navArea}>
            <ul className={styles.menus}>
                {" "}
                {menuItemsData.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}{" "}
            </ul>{" "}
        </nav>
    );
};

export default MiddleMenuMain;
