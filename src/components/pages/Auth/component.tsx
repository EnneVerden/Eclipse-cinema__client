import React, { useState, useCallback } from "react";
import PageFade from "components/blocks/PageFade";
import AuthForm from "components/forms/AuthForm";

import useStyles from "./styles";

const AuthPage: React.FC = () => {
  const styles = useStyles();
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const changeFormKind = useCallback(
    () => setIsLoginForm((loginForm) => !loginForm),
    []
  );

  return (
    <PageFade>
      <div className={styles.wrapper}>
        <AuthForm changeFormKind={changeFormKind} isLoginForm={isLoginForm} />
      </div>
    </PageFade>
  );
};

export default AuthPage;
