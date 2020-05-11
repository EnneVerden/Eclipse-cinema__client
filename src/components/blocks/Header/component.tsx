import React, { useState } from "react";
import classNames from "classnames";

import useStyles from "./styles";
import Logo from "components/blocks/Logo";
import Container from "components/blocks/Container";
import SignIn from "components/blocks/SignIn";
import Dropdown from "components/blocks/Dropdown";
import { IUser } from "types/user";

interface IProps {
  user?: IUser | {};
}

const Header: React.FC<IProps> = ({ user = {} }) => {
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
