import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

import styles from "./middlemenu.module.css"

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"

const MenuItems = ({ items, depthLevel }) => {
    console.log(items)
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        // window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        // window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <li
            className={styles.menuItems}
            ref={ref}
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            onMouseEnter={() => setDropdown((prev) => !prev)}
            onMouseLeave={() => setDropdown((prev) => !prev)}
        >
            {items.category_children ? (
                <>
                    {/* <h3
            // type="button"
            // aria-haspopup="menu"
            // aria-expanded={dropdown ? "true" : "false"}
          >
            {items.name}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className={styles.arrow} />}{" "}
          </h3> */}
                    <div className={styles.menuItemsLinks}>
                        <h3>{items.name}</h3>
                        {
                            items.category_children.length > 0 && (
                                <>
                                    {depthLevel > 0 ? <span><MdKeyboardArrowRight /></span> : <span><MdKeyboardArrowDown /></span>}
                                </>

                            )
                        }
                    </div>
                    {
                        items.category_children.length > 0 && (

                            <Dropdown
                                depthLevel={depthLevel}
                                submenus={items.category_children}
                                dropdown={dropdown}
                            />
                        )
                    }
                </>
            ) : (
                <Link href="/#"> {items.name} </Link>
            )}{" "}
        </li>
    );
};

export default MenuItems;
