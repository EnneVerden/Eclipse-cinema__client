import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import { TProps } from "./container";

type TFieldNames = "firstName" | "lastName" | "email" | "oldPassword";

const ProfileForm: React.FC<TProps> = ({
  fullName,
  email,
  balance,
  setAlert,
  changeUserInfo,
}) => {
  const styles = useStyles();

  const validate = (fieldName: TFieldNames, value: string): boolean => {
    if (!value) {
      setAlert({
        type: "warning",
        message: `Please, fill the ${fieldName} field`,
      });
      return false;
    } else if (
      (fieldName === "firstName" && !/^[a-zA-Z]+$/.test(value)) ||
      (fieldName === "lastName" && !/^[a-zA-Z]+$/.test(value))
    ) {
      setAlert({ type: "error", message: "Please, use only letters" });
      return false;
    } else if (
      fieldName === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ) {
      setAlert({ type: "error", message: "Invalid email address" });
      return false;
    }

    return true;
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        firstName: fullName ? fullName.split(" ")[0] : "",
        lastName: fullName ? fullName.split(" ")[1] : "",
        formEmail: email ? email : "",
        oldPassword: "",
      }}
      onSubmit={({ firstName, lastName, formEmail, oldPassword }) => {
        if (!validate("firstName", firstName)) return;
        if (!validate("lastName", lastName)) return;
        if (!validate("email", formEmail)) return;
        if (!validate("oldPassword", oldPassword)) return;

        if (`${firstName} ${lastName}` !== fullName && formEmail !== email) {
          changeUserInfo(oldPassword, {
            fullName: `${firstName} ${lastName}`,
            email: formEmail,
          });
        } else if (`${firstName} ${lastName}` !== fullName) {
          changeUserInfo(oldPassword, { fullName: `${firstName} ${lastName}` });
        } else if (formEmail !== email) {
          changeUserInfo(oldPassword, { email: formEmail });
        } else {
          setAlert({ type: "error", message: "Change at least one field" });
        }
      }}
    >
      {({
        handleChange,
        values: { firstName, lastName, formEmail, oldPassword },
        handleSubmit,
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.title}>
            <span>Profile information</span>
            <span className={styles.balance}>Balance: {balance}$</span>
          </div>
          <div className={styles.name}>
            <TextField
              label="First name"
              variant="outlined"
              color="primary"
              size="small"
              name="firstName"
              value={firstName}
              className={styles.input}
              onChange={handleChange}
            />
            <TextField
              label="Last name"
              variant="outlined"
              size="small"
              name="lastName"
              value={lastName}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div className={styles.email}>
            <TextField
              label="email"
              variant="outlined"
              size="small"
              name="formEmail"
              value={formEmail}
              className={styles.input}
              onChange={handleChange}
            />
            <TextField
              label="Current password"
              type="password"
              variant="outlined"
              size="small"
              name="oldPassword"
              value={oldPassword}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttons}>
            <Button
              type="submit"
              variant="outlined"
              size="large"
              className={styles.button}
            >
              Save
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ProfileForm;
