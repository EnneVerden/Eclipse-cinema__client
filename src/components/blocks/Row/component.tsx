import React from "react";

import useStyles from "./styles";

const Row: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.row}>{children}</div>;
};

export default Row;
