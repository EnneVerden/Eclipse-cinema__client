import React from "react";

import useStyles from "./styles";
import Loader from "components/blocks/loader/component";

const PageLoader = () => {
  const styles = useStyles();
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <Loader />
      </div>
    </div>
  );
};

export default PageLoader;
