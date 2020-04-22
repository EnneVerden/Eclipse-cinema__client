import React, { useState } from "react";

import AuthForm from "../../blocks/auth-form";
import useStyles from "./styles";

const AuthPage: React.FC = () => {
  const styles = useStyles();
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const changeFormKind = (): void => {
    setIsLoginForm((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <AuthForm changeFormKind={changeFormKind} />
    </div>
  );
};

export default AuthPage;
