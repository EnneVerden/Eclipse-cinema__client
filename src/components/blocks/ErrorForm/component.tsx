import React, { useCallback } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import useStyles from "./styles";

interface IProps {
  errorCode?: string;
  title?: string;
  buttonText: string;
  path: string;
}

const NotFoundPage: React.FC<IProps> = ({
  path,
  errorCode,
  title,
  buttonText,
}) => {
  const styles = useStyles();
  const history = useHistory();

  const handleClick = useCallback(() => history.push(path), [history]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.code}>{errorCode}</p>
      <p className={styles.title}>{title}</p>
      <div className={styles.btnWrapper}>
        <Button
          type="button"
          variant="outlined"
          size="large"
          className={styles.button}
          onClick={handleClick}
        >
          <ExitToAppIcon style={{ marginRight: "5px" }} />
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
