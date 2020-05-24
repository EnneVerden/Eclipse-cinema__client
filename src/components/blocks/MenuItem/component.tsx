import React from "react";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

interface IProps {
  onClick?: () => void;
}

const MenuItem: React.FC<IProps> = ({ children, onClick }) => {
  const styles = useStyles();

  return (
    <Button className={styles.item} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MenuItem;
