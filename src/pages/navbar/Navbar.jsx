import styles from "./Navbar.module.scss";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (item) => {
    if (item === openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(item);
    }
  };

  const menuItems = [
    {
      id: 1,
      label: "First List",
      items: [
        {
          id: 1,
          label: "A.1",
        },
        {
          id: 2,
          label: "A.2",
        },
        {
          id: 3,
          label: "A.3",
        },
      ],
    },
    {
      id: 2,
      label: "Second List",
      items: [
        {
          id: 1,
          label: "B.1",
        },
        {
          id: 2,
          label: "B.2",
        },
        {
          id: 3,
          label: "B.3",
        },
      ],
    },
  ];

  return (
    <div className={styles.Navbar}>
      <div>logo</div>
      <div className={`${styles.menu}`}>
        <ul className={styles.menuList}>
          {menuItems?.map((item) => (
            <li
              className={styles.menuList_items}
              key={item.id}
              onClick={() => handleOpenMenu(item?.id)}
            >
              <div className={`${styles.menu_Label}`}>
                <span>{item.label}</span>
                <span>
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={`${styles.menu_Dropdown} ${
                  openMenu && openMenu === item?.id ? styles.open : ""
                }`}
              >
                <ul>
                  {item?.items?.map((listItem) => (
                    <li key={listItem.id}>
                      <span>{listItem?.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>Actions</div>
    </div>
  );
};

export default Navbar;
