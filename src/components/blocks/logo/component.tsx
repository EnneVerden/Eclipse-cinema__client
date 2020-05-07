import React from "react";

import useStyles from "./style";

interface IProps {
  width?: string;
}

const Logo: React.FC<IProps> = ({ width }) => {
  const styles = useStyles();

  return (
    <div className={styles.logo}>
      <img src="title.png" alt="logo" style={{ width }} />
    </div>
  );
};

export default Logo;
