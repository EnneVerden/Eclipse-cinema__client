import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { color_white } from "theme/variables";
import DropdownBtn from "components/blocks/DropdownBtn";
import MenuList from "components/blocks/MenuList";
import MenuItem from "components/blocks/MenuItem";
import logout from "actions/logout";
import { TProps } from "./container";

import useStyles from "./styles";

const Dropdown: React.FC<TProps> = ({ handleToggle, isVisible, logout }) => {
  const styles = useStyles();

  const handleClick = useCallback(() => logout(), []);

  return (
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
        <Link to="/" className={styles.menuLink} onClick={handleClick}>
          <MenuItem>
            <ExitToAppIcon style={{ color: color_white }} />
            <p className={styles.menuText}>Logout</p>
          </MenuItem>
        </Link>
      </MenuList>
    </div>
  );
};

export default Dropdown;
