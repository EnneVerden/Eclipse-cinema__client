import React, { useState, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FormChanger from "../../blocks/form-changer";
import useStyles from "./styles";

interface IProps {
  changeFormKind: () => void;
}

const AuthForm: React.FC<IProps> = ({ changeFormKind }) => {
  const styles = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <TextField
        label="Email"
        variant="outlined"
        className={styles.input}
        size="small"
        name="email"
        onChange={handleChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        className={styles.input}
        size="small"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <Button variant="outlined" size="large" className={styles.btn}>
        Login
      </Button>
      <FormChanger changeFormKind={changeFormKind} />
    </form>
  );
};

export default AuthForm;
