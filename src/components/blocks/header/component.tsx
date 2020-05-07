import React from "react";

import useStyles from "./styles";
import Logo from "components/blocks/logo";
import SignIn from "../sign-in";

const Header = () => {
  const styles = useStyles();
  console.log(document.documentElement.clientWidth);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo
          width={document.documentElement.clientWidth > 600 ? "190px" : "150px"}
        />
        <SignIn />
      </div>
    </header>
  );
};

export default Header;
