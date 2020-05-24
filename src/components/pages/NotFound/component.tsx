import React from "react";
import ErrorForm from "components/blocks/ErrorForm";
import { HOME_PATH } from "constants/paths";

import useStyles from "./styles";

const NotFoundPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.background}>
      <ErrorForm
        path={HOME_PATH}
        errorCode="404"
        title="Page not found"
        buttonText="Go back"
      />
    </div>
  );
};

export default NotFoundPage;
