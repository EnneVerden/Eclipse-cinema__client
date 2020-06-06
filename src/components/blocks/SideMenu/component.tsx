import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MovieIcon from "@material-ui/icons/Movie";
import GroupIcon from "@material-ui/icons/Group";
import ShopIcon from "@material-ui/icons/Shop";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "components/blocks/Logo";
import MenuItem from "components/blocks/MenuItem";

import useStyles from "./styles";
import { TProps } from "./types";

const SideMenu: React.FC<TProps> = ({
  user,
  sideMenuIsVisible,
  currentTab,
  handleTabChange,
  handleToggle,
  authorization,
}) => {
  const styles = useStyles({ sideMenuIsVisible });
  const history = useHistory();

  const handleLink = useCallback(() => history.push("/"), [history]);

  useEffect(() => {
    if (!Object.keys(user).length) authorization();
  }, [user, authorization]);

  return (
    <>
      <div className={styles.header}>
        <Button
          variant="outlined"
          className={styles.buttonClose}
          onClick={handleToggle}
        >
          <ArrowForwardIcon className={styles.closeIcon} />
        </Button>
      </div>
      <div className={styles.sideMenu}>
        <div className={styles.logo}>
          <Logo width="100" className={styles.img} />

          <Button
            variant="outlined"
            className={styles.buttonClose}
            onClick={handleToggle}
          >
            <ArrowBackIcon className={styles.closeIcon} />
          </Button>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img
              src="https://image.flaticon.com/icons/svg/236/236831.svg"
              alt="avatar"
            />
          </div>
          <div className={styles.info}>
            <p className={styles.role}>Admin</p>
            <p className={styles.name}>{user.fullName}</p>
          </div>
          <Button
            variant="outlined"
            className={styles.button}
            onClick={handleLink}
          >
            <ExitToAppIcon className={styles.icon} />
          </Button>
        </div>
        <div className={styles.menu}>
          <MenuItem
            className={classNames(
              styles.item,
              currentTab === "movies" && styles.activeItem
            )}
            onClick={() => handleTabChange("movies")}
          >
            <MovieIcon />
            <span className={styles.title}>Movies</span>
          </MenuItem>
          <MenuItem
            className={classNames(
              styles.item,
              currentTab === "users" && styles.activeItem
            )}
            onClick={() => handleTabChange("users")}
          >
            <GroupIcon />
            <span className={styles.title}>Users</span>
          </MenuItem>
          <MenuItem
            className={classNames(
              styles.item,
              currentTab === "orders" && styles.activeItem
            )}
            onClick={() => handleTabChange("orders")}
          >
            <ShopIcon />
            <span className={styles.title}>Orders</span>
          </MenuItem>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
