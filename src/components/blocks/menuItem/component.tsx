import React from "react";

import useStyles from "./styles";

const MenuItem: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.item}>{children}</div>;
};

export default MenuItem;
