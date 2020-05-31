import React from "react";
import classNames from "classnames";

import useStyles from "./styles";

const MenuList: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={classNames(styles.list)}>{children}</div>;
};

export default MenuList;
