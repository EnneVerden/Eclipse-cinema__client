import React from "react";
import ErrorForm from "components/blocks/ErrorForm";
import { HOME_PATH } from "constants/paths";

import useStyles from "./styles";

const UnauthorizedPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.background}>
      <ErrorForm
        path={HOME_PATH}
        errorCode="403"
        title="You aren't authorized"
        buttonText="Go back"
      />
    </div>
  );
};

export default UnauthorizedPage;
