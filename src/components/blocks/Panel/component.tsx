import React from "react";

import useStyles from "./styles";

const Panel: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.panel}>{children}</div>;
};

export default Panel;
