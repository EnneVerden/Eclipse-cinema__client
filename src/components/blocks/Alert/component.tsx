import React, { useEffect, useState } from "react";
import SuccessIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import WarningIcon from "@material-ui/icons/ReportProblemOutlined";
import classNames from "classnames";

import useStyles from "./styles";
import { TProps } from "./container";
import {
  color_success_font,
  color_error_font,
  color_warning_font,
} from "theme/variables";

const Alert: React.FC<TProps> = ({ alert }) => {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    if (Object.keys(alert).length > 1) {
      setIsVisible(true);
    }
  }, [alert]);

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
          alert.type === "success" ? styles.success : null,
          alert.type === "error" ? styles.error : null,
          alert.type === "warning" ? styles.warning : null
        )}
      >
        <span className={styles.icon}>
          {alert.type === "success" ? (
            <SuccessIcon style={{ color: color_success_font }} />
          ) : null}
          {alert.type === "error" ? (
            <ErrorIcon style={{ color: color_error_font }} />
          ) : null}
          {alert.type === "warning" ? (
            <WarningIcon style={{ color: color_warning_font }} />
          ) : null}
        </span>
        <span className={styles.message}>{alert.message}</span>
      </div>
    </div>
  );
};

export default Alert;
