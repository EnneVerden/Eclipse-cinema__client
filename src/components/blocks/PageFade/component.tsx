import React from "react";
import Fade from "@material-ui/core/Fade";

import useStyles from "./styles";

const PageFade: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Fade in>
        <div>{children}</div>
      </Fade>
    </div>
  );
};

export default PageFade;
