import React from "react";
import classNames from "classnames";

import useStyles from "./styles";
import Logo from "components/blocks/logo";
import DropdownBtn from "components/blocks/dropdown-btn";
import MenuList from "components/blocks/menuList";
import MenuItem from "components/blocks/menuItem";

const Header = () => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <div className={classNames(styles.wrapper)}>
        <Logo
          width={document.documentElement.clientWidth > 600 ? "190px" : "150px"}
        />
        <div className={styles.dropdown}>
          <DropdownBtn
            avatarURL="https://image.flaticon.com/icons/svg/236/236831.svg"
            fullName="Test Name"
          />
          <MenuList>
            <MenuItem>Balance</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </div>
      </div>
    </header>
  );
};

export default Header;
