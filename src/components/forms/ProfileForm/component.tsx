import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import { TProps } from "./container";

type TFieldNames = "firstName" | "lastName" | "email";

const ProfileForm: React.FC<TProps> = ({ user, setAlert }) => {
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
        firstName: user.fullName ? user.fullName.split(" ")[0] : "",
        lastName: user.fullName ? user.fullName.split(" ")[1] : "",
        email: user.email ? user.email : "",
      }}
      onSubmit={({ firstName, lastName, email }) => {
        if (!validate("firstName", firstName)) return;
        if (!validate("lastName", lastName)) return;
        if (!validate("email", email)) return;

        console.log(email);
      }}
    >
      {({
        handleChange,
        values: { firstName, lastName, email },
        handleSubmit,
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.title}>Profile information</div>
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
              name="email"
              value={email}
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
              Save
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ProfileForm;
