import React from "react";

import useStyles from "./styles";

const Container: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.container}>{children}</div>;
};

export default Container;
