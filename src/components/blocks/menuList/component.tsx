// rename
import React from "react";
import classNames from "classnames";

import useStyles from "./styles";

interface IProps {
  isVisible: boolean;
}

const MenuList: React.FC<IProps> = ({ children, isVisible }) => {
  const styles = useStyles();

  return (
    <div className={classNames(styles.list, !isVisible ? styles.hidden : null)}>
      {children}
    </div>
  );
};

export default MenuList;
