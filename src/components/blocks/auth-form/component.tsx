import React, { useState, useEffect, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FormChanger from "components/blocks/form-changer";
import useStyles from "./styles";
import { TProps } from "./container";

const AuthForm: React.FC<TProps> = ({
  changeFormKind,
  isLoginForm,
  login,
  registration,
}) => {
  const styles = useStyles();
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = (): void => {
    if (isLoginForm) {
      login(email, password);
    } else {
      if (password !== confirmPassword) {
        alert("Password mismatch!");
        return;
      }

      registration(fullName, email, password);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "fullName":
        setFullName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

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
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`${styles.form} ${
        isLoginForm ? styles.form_signIn : styles.form_signUp
      }`}
    >
      <TextField
        label="Full name"
        variant="outlined"
        className={`${styles.hide} ${styles.input} ${
          isVisible ? styles.show : null
        }`}
        size="small"
        id="fullName"
        name="fullName"
        onChange={handleChange}
      />
      <TextField
        label="Email"
        variant="outlined"
        className={`${styles.input} ${
          !isLoginForm && !isVisible ? styles.moveInput : styles.cancelMoveInput
        }`}
        size="small"
        name="email"
        onChange={handleChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        className={`${styles.input} ${
          !isLoginForm && !isVisible ? styles.moveInput : styles.cancelMoveInput
        }`}
        size="small"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <TextField
        label="Confirm password"
        variant="outlined"
        className={`${styles.hide} ${styles.input} ${
          isVisible ? styles.show : null
        }`}
        size="small"
        name="confirmPassword"
        type="password"
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="outlined"
        size="large"
        className={`${styles.btn} ${
          !isLoginForm && !isVisible ? styles.moveBtn : styles.cancelMoveBtn
        }`}
        onClick={handleClick}
      >
        {isLoginForm ? "Login" : "Create account"}
      </Button>
      <FormChanger
        changeFormKind={changeFormKind}
        isLoginForm={isLoginForm}
        isVisible={isVisible}
      />
    </form>
  );
};

export default AuthForm;
