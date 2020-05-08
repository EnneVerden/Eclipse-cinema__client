import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import useStyles from "./styles";
import { color_white } from "theme/variables";
import Logo from "components/blocks/logo";
import DropdownBtn from "components/blocks/dropdown-btn";
import MenuList from "components/blocks/menuList";
import MenuItem from "components/blocks/menuItem";

const Header = () => {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={classNames(styles.wrapper)}>
        <Logo
          width={document.documentElement.clientWidth > 600 ? "190px" : "150px"}
        />
        <div className={styles.dropdown}>
          <DropdownBtn
            avatarURL="https://image.flaticon.com/icons/svg/236/236831.svg"
            fullName="Anatoly Magnatov"
            handleToggle={handleToggle}
            isVisible={isVisible}
          />
          <MenuList isVisible={isVisible}>
            <Link to="/profile" className={styles.menuLink}>
              <MenuItem>
                <AccountBalanceWalletIcon style={{ color: color_white }} />
                <p className={styles.menuText}>Balance: 10$</p>
              </MenuItem>
            </Link>
            <Link to="/profile" className={styles.menuLink}>
              <MenuItem>
                <AccountCircleIcon style={{ color: color_white }} />
                <p className={styles.menuText}>Profile</p>
              </MenuItem>
            </Link>
            <Link to="/dashboard" className={styles.menuLink}>
              <MenuItem>
                <DashboardIcon style={{ color: color_white }} />
                <p className={styles.menuText}>Dashboard</p>
              </MenuItem>
            </Link>
            <Link to="/auth" className={styles.menuLink}>
              <MenuItem>
                <ExitToAppIcon style={{ color: color_white }} />
                <p className={styles.menuText}>Logout</p>
              </MenuItem>
            </Link>
          </MenuList>
        </div>
      </div>
    </header>
  );
};

export default Header;
