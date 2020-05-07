import React from "react";

import useStyles from "./styles";

const MenuList: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.list}>{children}</div>;
};

export default MenuList;
