import React from "react";

import useStyles from "./styles";
import Logo from "components/blocks/logo";

const Header = () => {
  const styles = useStyles();
  console.log(document.documentElement.clientWidth);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo
          width={document.documentElement.clientWidth > 600 ? "190px" : "150px"}
        />
      </div>
    </header>
  );
};

export default Header;
