import React, { useCallback, useState, useRef, useEffect } from "react";
import Fade from "@material-ui/core/Fade";
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
  avatar,
  fullName,
  balance,
  roles,
  logout,
}) => {
  const styles = useStyles();
  const history = useHistory();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleToggle = useCallback(() => setIsVisible((visible) => !visible), [
    setIsVisible,
  ]);

  const handleClose = useCallback(() => setIsVisible(false), [setIsVisible]);

  const handleLink = useCallback((url: string) => history.push(url), [history]);

  const handleLogout = useCallback(() => {
    history.push("/");
    logout();
  }, [logout, history]);

  useEffect(() => {
    if (roles?.length) {
      roles.forEach((role) => {
        if (role.name === "admin" || role.name === "Admin") {
          setIsAdmin(true);
        }
      });
    }
  }, [roles]);

  return (
    <div className={styles.dropdown}>
      <DropdownBtn
        avatarURL={avatar ? avatar : ""}
        fullName={fullName ? fullName : ""}
        balance={balance ? balance : 0}
        isVisible={isVisible}
        handleToggle={handleToggle}
        handleClose={handleClose}
        buttonRef={buttonRef}
      />
      <Fade in={isVisible}>
        <div>
          <MenuList>
            <MenuItem onClick={() => handleLink("/profile")}>
              <AccountCircleIcon style={{ color: color_metallic }} />
              <p className={styles.menuText}>Profile</p>
            </MenuItem>
            {isAdmin && (
              <MenuItem onClick={() => handleLink("/dashboard")}>
                <DashboardIcon style={{ color: color_metallic }} />
                <p className={styles.menuText}>Dashboard</p>
              </MenuItem>
            )}
            <MenuItem onClick={handleLogout}>
              <ExitToAppIcon style={{ color: color_metallic }} />
              <p className={styles.menuText}>Logout</p>
            </MenuItem>
          </MenuList>
        </div>
      </Fade>
    </div>
  );
};

export default Dropdown;
