import React from "react";

import useStyles from "./styles";

interface IProps {
  heightElementsAbove?: number;
  footerHeight?: number;
}

const Background: React.FC<IProps> = ({
  children,
  heightElementsAbove,
  footerHeight,
}) => {
  const styles = useStyles({ heightElementsAbove, footerHeight });

  return <div className={styles.background}>{children}</div>;
};

export default Background;
