import React, { useEffect, useState } from "react";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import WarningIcon from "@material-ui/icons/ReportProblemOutlined";
import classNames from "classnames";

import useStyles from "./styles";
import { TProps } from "./container";
import { color_error_font, color_warning_font } from "theme/variables";

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
      }, 3000);
    }
  }, [isVisible]);

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(
          styles.background,
          isVisible ? styles.isVisible : null,
          error.type === "error" ? styles.error : styles.warning
        )}
      >
        <span className={styles.icon}>
          {error.type === "error" ? (
            <ErrorIcon style={{ color: color_error_font }} />
          ) : (
            <WarningIcon style={{ color: color_warning_font }} />
          )}
        </span>
        <span className={styles.message}>{error.message}</span>
      </div>
    </div>
  );
};

export default Alert;
