import React, { useCallback, useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import DropdownBtn from "components/blocks/DropdownBtn";
import MenuList from "components/blocks/MenuList";
import MenuItem from "components/blocks/MenuItem";
import { TProps } from "./container";

import { color_metallic } from "theme/variables";
import useStyles from "./styles";

const Dropdown: React.FC<TProps> = ({
  user: { avatar, fullName, balance },
  logout,
}) => {
  const styles = useStyles();
  const history = useHistory();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggle = useCallback(
    () => setIsVisible((visible) => !visible),
    []
  );

  const handleLink = useCallback((url) => history.push(url), [history]);

  const handleLogout = useCallback(() => {
    history.push("/");
    logout();
  }, [logout, history]);

  return (
    <div className={styles.dropdown}>
      <DropdownBtn
        avatarURL={avatar}
        fullName={fullName}
        balance={balance}
        isVisible={isVisible}
        handleToggle={handleToggle}
      />
      <MenuList isVisible={isVisible}>
        <MenuItem onClick={() => handleLink("/profile")}>
          <AccountCircleIcon style={{ color: color_metallic }} />
          <p className={styles.menuText}>Profile</p>
        </MenuItem>
        <MenuItem onClick={() => handleLink("/dashboard")}>
          <DashboardIcon style={{ color: color_metallic }} />
          <p className={styles.menuText}>Dashboard</p>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ExitToAppIcon style={{ color: color_metallic }} />
          <p className={styles.menuText}>Logout</p>
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default Dropdown;
