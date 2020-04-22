import React, { MouseEvent } from "react";

import useStyles from "./styles";

interface IProps {
  changeFormKind: () => void;
}

const FormChanger: React.FC<IProps> = ({ changeFormKind }) => {
  const styles = useStyles();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    changeFormKind();
  };

  return (
    <div className={styles.changer}>
      <span className={styles.changerTitle}>Don't have an account yet?</span>
      <a href="#" className={styles.changerLink} onClick={handleClick}>
        Registration
      </a>
    </div>
  );
};

export default FormChanger;
