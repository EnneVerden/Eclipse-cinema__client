import React from "react";
import classNames from "classnames";

import useStyles from "./styles";

const Loader: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.loader}>
      <div className={classNames(styles.loaderInner, styles.loaderOne)}></div>
      <div className={classNames(styles.loaderInner, styles.loaderTwo)}></div>
      <div className={classNames(styles.loaderInner, styles.loaderThree)}></div>
    </div>
  );
};

export default Loader;
