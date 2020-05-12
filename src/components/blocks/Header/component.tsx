import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";

import useStyles from "./styles";
import Logo from "components/blocks/Logo";
import Container from "components/blocks/Container";
import SignIn from "components/blocks/SignIn";
import Dropdown from "components/blocks/Dropdown";
import { TProps } from "./container";

const Header: React.FC<TProps> = ({ user = {}, authorization }) => {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggle = useCallback(
    () => setIsVisible((visible) => !visible),
    []
  );

  useEffect(() => {
    if (!Object.keys(user).length) authorization();
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <div className={classNames(styles.wrapper)}>
          <Logo
            width={
              document.documentElement.clientWidth > 600 ? "100px" : "90px"
            }
          />
          {Object.keys(user).length ? (
            <Dropdown handleToggle={handleToggle} isVisible={isVisible} />
          ) : (
            <SignIn />
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
