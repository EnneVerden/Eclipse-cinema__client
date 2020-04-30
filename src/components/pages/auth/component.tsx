import React, { useState } from "react";

import AuthForm from "@components/blocks/auth-form";
import useStyles from "./styles";
import Alert from "@components/blocks/alert";

const AuthPage: React.FC = () => {
  const styles = useStyles();
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const changeFormKind = () => {
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
