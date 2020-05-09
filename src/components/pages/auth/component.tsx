// rename
import React, { useState } from "react";

import AuthForm from "components/forms/AuthForm";
import useStyles from "./styles";
import Alert from "components/blocks/Alert";

const AuthPage: React.FC = () => {
  const styles = useStyles();
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const changeFormKind = (): void => {
    setIsLoginForm((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <AuthForm changeFormKind={changeFormKind} isLoginForm={isLoginForm} />
      <Alert />
    </div>
  );
};

export default AuthPage;
