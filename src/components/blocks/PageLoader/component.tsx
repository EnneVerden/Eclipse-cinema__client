import React from "react";

import useStyles from "./styles";
import Loader from "components/blocks/Loader";

const PageLoader: React.FC = () => {
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
