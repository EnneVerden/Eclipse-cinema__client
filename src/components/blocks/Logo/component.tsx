import React, { useCallback } from "react";
import { useHistory } from "react-router";
import classNames from "classnames";

import useStyles from "./styles";

interface IProps {
  width: string;
  style?: object;
  className?: any;
}

const Logo: React.FC<IProps> = ({ style, className, width }) => {
  const styles = useStyles();
  const history = useHistory();

  const handleLink = useCallback(() => history.push("/"), [history]);

  return (
    <div
      style={style}
      className={classNames(styles.logo, className)}
      onClick={handleLink}
    >
      <img src="Logo.png" alt="logo" width={width} />
    </div>
  );
};

export default Logo;
