import React from "react";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const SignIn = () => {
  const styles = useStyles();

  return (
    <Link href="/auth" className={styles.link}>
      <Button
        type="button"
        variant="outlined"
        size="large"
        className={styles.btn}
      >
        SIGN IN
      </Button>
    </Link>
  );
};

export default SignIn;
