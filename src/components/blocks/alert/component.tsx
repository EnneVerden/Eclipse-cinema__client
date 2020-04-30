import React, { useEffect, useState } from "react";
import ErrorIcon from "@material-ui/icons/ErrorOutline";

import useStyles from "./styles";
import { TProps } from "./container";

const Alert: React.FC<TProps> = ({ error }) => {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    if (Object.keys(error).length > 1) {
      setIsVisible(true);
    }
  }, [error]);

  useEffect(() => {
    if (isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false);
        clearTimeout(timer);
      }, 2500);
    }
  }, [isVisible]);

  return (
    <div className={styles.wrapper}>
      <div
        className={`error-handler ${styles.background} ${
          isVisible ? styles.isVisible : null
        }`}
      >
        <span className={styles.icon}>
          <ErrorIcon />
        </span>
        <span className={styles.message}>{error.message}</span>
      </div>
    </div>
  );
};

export default Alert;
