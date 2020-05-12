import React, { useState, useEffect, useCallback, MouseEvent } from "react";
import { Formik } from "formik";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Logo from "components/blocks/Logo";

import useStyles from "./styles";
import { TProps } from "./container";

const AuthForm: React.FC<TProps> = ({
  changeFormKind,
  isLoginForm,
  authorization,
  login,
  registration,
  setAlert,
}) => {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setWarning = useCallback(
    (message: string) => setAlert({ type: "warning", message }),
    [setAlert]
  );

  const hiddenInputClass = classNames(
    styles.hide,
    styles.input,
    isVisible ? styles.show : null
  );
  const movingInputClass = classNames(
    styles.input,
    !isLoginForm && !isVisible ? styles.moveInput : styles.cancelMoveInput
  );

  const changeForm = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      changeFormKind();
    },
    [changeFormKind]
  );

  useEffect(() => {
    authorization();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isLoginForm) {
      timer = setTimeout(() => {
        setIsVisible(true);
        clearTimeout(timer);
      }, 500);
    } else {
      setIsVisible(false);
    }
  }, [isLoginForm]);

  return (
    <Formik
      initialValues={{
        email: "",
        fullName: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={({ email, password, fullName, confirmPassword }) => {
        if (!email) {
          setWarning("Please, fill the email field");
          return;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
          setWarning("Invalid email address");
          return;
        } else if (!password) {
          setWarning("Please, fill the password field");
          return;
        } else if (!isLoginForm && !fullName) {
          setWarning("Please, fill the full name field");
          return;
        }

        if (isLoginForm && email && password) {
          login(email, password);
        } else if (!isLoginForm && fullName && email && password) {
          if (password !== confirmPassword) {
            setWarning("Password mismatch!");
            return;
          }

          registration(fullName, email, password);
        }
      }}
    >
      {({ handleSubmit, handleChange }) => (
        <form
          onSubmit={handleSubmit}
          className={classNames(
            styles.form,
            isLoginForm ? styles.form_signIn : styles.form_signUp
          )}
        >
          <div className={styles.logo}>
            <Logo width={"120px"} />
          </div>
          <TextField
            label="Full name"
            variant="outlined"
            className={hiddenInputClass}
            size="small"
            id="fullName"
            name="fullName"
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            className={movingInputClass}
            size="small"
            name="email"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            className={movingInputClass}
            size="small"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <TextField
            label="Confirm password"
            variant="outlined"
            className={hiddenInputClass}
            size="small"
            name="confirmPassword"
            type="password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="outlined"
            size="large"
            className={classNames(
              styles.btn,
              !isLoginForm && !isVisible ? styles.moveBtn : styles.cancelMoveBtn
            )}
          >
            {isLoginForm ? "Login" : "Create account"}
          </Button>
          <div
            className={classNames(
              styles.changer,
              !isLoginForm && !isVisible ? styles.move : styles.cancelMove
            )}
          >
            <span className={styles.changerTitle}>
              {isLoginForm
                ? "Don't have an account yet?"
                : "Do you have an account?"}
            </span>
            <a href="/" className={styles.changerLink} onClick={changeForm}>
              {isLoginForm ? "Sign up" : "Sign in"}
            </a>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AuthForm;
