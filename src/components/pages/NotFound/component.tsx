import React, { useCallback } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { HOME_PATH } from "constants/paths";

import useStyles from "./styles";

const NotFoundPage: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();

  const handleClick = useCallback(() => history.push(HOME_PATH), [history]);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <p className={styles.code}>404</p>
        <p className={styles.title}>Page not found</p>
        <div className={styles.btnWrapper}>
          <Button
            type="button"
            variant="outlined"
            size="large"
            className={styles.button}
            onClick={handleClick}
          >
            <ExitToAppIcon style={{ marginRight: "5px" }} />
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
