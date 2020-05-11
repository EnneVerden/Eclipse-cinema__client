import React, { useState, useCallback } from "react";

import AuthForm from "components/forms/AuthForm";
import useStyles from "./styles";
import Alert from "components/blocks/Alert";

const AuthPage: React.FC = () => {
  const styles = useStyles();
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const changeFormKind = useCallback(
    () => setIsLoginForm((loginForm) => !loginForm),
    []
  );

  return (
    <div className={styles.wrapper}>
      <AuthForm changeFormKind={changeFormKind} isLoginForm={isLoginForm} />
      <Alert />
    </div>
  );
};

export default AuthPage;
