import React from "react";

import useStyles from "./styles";

const Loader: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.background}>
      <div className={styles.loader}>
        <div className={`${styles.loaderInner} ${styles.loaderOne}`}></div>
        <div className={`${styles.loaderInner} ${styles.loaderTwo}`}></div>
        <div className={`${styles.loaderInner} ${styles.loaderThree}`}></div>
      </div>
    </div>
  );
};

export default Loader;
