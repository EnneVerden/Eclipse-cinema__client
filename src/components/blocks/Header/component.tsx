import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import useStyles from "./styles";
import { color_white } from "theme/variables";
import Logo from "components/blocks/Logo";
import DropdownBtn from "components/blocks/DropdownBtn";
import MenuList from "components/blocks/MenuList";
import MenuItem from "components/blocks/MenuItem";
import Container from "components/blocks/Container";
import SignIn from "../SignIn";

const Header: React.FC = () => {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={classNames(styles.wrapper)}>
          <Logo
            width={
              document.documentElement.clientWidth > 600 ? "110px" : "90px"
            }
          />
          <SignIn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
