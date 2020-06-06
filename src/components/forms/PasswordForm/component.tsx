import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import { TProps } from "./container";

type TFieldNames = "newPassword" | "confirmPassword" | "oldPassword";

const PasswordForm: React.FC<TProps> = ({ setAlert, changeUserPassword }) => {
  const styles = useStyles();

  const validate = (
    value: string | string[],
    fieldName?: TFieldNames
  ): boolean => {
    if (!value) {
      setAlert({
        type: "warning",
        message: `Please, fill the ${fieldName} field`,
      });
      return false;
    } else if (fieldName === "newPassword" && value.length < 6) {
      setAlert({
        type: "error",
        message: "Password cannot be less than 6 characters",
      });
      return false;
    } else if (Array.isArray(value) && value[0] !== value[1]) {
      setAlert({ type: "error", message: "Password mismatch" });
      return false;
    }

    return true;
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        newPassword: "",
        confirmPassword: "",
        oldPassword: "",
      }}
      onSubmit={({ newPassword, confirmPassword, oldPassword }) => {
        if (!validate(newPassword, "newPassword")) return;
        if (!validate(confirmPassword, "confirmPassword")) return;
        if (!validate(oldPassword, "oldPassword")) return;
        if (!validate([newPassword, confirmPassword])) return;

        changeUserPassword(newPassword, oldPassword);
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.title}>Password information</div>
          <div className={styles.newPassword}>
            <TextField
              label="New password"
              type="password"
              variant="outlined"
              color="primary"
              size="small"
              name="newPassword"
              className={styles.input}
              onChange={handleChange}
            />
            <TextField
              label="Confirm password"
              type="password"
              variant="outlined"
              size="small"
              name="confirmPassword"
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div className={styles.oldPassword}>
            <TextField
              label="Old password"
              type="password"
              variant="outlined"
              size="small"
              name="oldPassword"
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="outlined"
              size="large"
              className={styles.button}
            >
              Change
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default PasswordForm;
