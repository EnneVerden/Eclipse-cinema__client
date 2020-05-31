import React from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

import useStyles from "./styles";

interface IProps {
  className?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<IProps> = ({ children, className, onClick }) => {
  const styles = useStyles();

  return (
    <Button
      className={classNames(styles.item, className)}
      onClick={onClick}
      disableRipple
    >
      {children}
    </Button>
  );
};

export default MenuItem;
