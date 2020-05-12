import React from "react";
import classNames from "classnames";

import useStyles from "./styles";

interface IProps {
  width: string;
  style?: object;
  className?: any;
}

const Logo: React.FC<IProps> = ({ style, className, width }) => {
  const styles = useStyles();

  return (
    <div style={style} className={classNames(styles.logo, className)}>
      <img src="Logo.png" alt="logo" width={width} />
    </div>
  );
};

export default Logo;
