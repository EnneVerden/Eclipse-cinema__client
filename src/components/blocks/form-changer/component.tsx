import React, { MouseEvent } from "react";

import useStyles from "./styles";

interface IProps {
  changeFormKind: () => void;
  isLoginForm: boolean;
  isVisible: boolean;
}

const FormChanger: React.FC<IProps> = ({
  changeFormKind,
  isLoginForm,
  isVisible,
}) => {
  const styles = useStyles();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    changeFormKind();
  };

  return (
    <div
      className={`${styles.changer} ${
        !isLoginForm && !isVisible ? styles.move : styles.cancelMove
      }`}
    >
      <span className={styles.changerTitle}>
        {isLoginForm ? "Don't have an account yet?" : "Do you have an account?"}
      </span>
      <a href="#" className={styles.changerLink} onClick={handleClick}>
        {isLoginForm ? "Sign up" : "Sign in"}
      </a>
    </div>
  );
};

export default FormChanger;
