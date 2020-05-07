import React from "react";
import classNames from "classnames";

import useStyles from "./styles";
import Logo from "components/blocks/logo";
import SignIn from "../sign-in";

const Header = () => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <div className={classNames(styles.wrapper, styles.padding)}>
        <Logo
          width={document.documentElement.clientWidth > 600 ? "190px" : "150px"}
        />
        <SignIn />
      </div>
    </header>
  );
};

export default Header;
