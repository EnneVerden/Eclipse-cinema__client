import React from "react";
import MPagination from "@material-ui/lab/Pagination";

import useStyles from "./styles";

interface IProps {
  countOfPages?: number;
  sizeOfPages?: "medium" | "large";
}

const Pagination: React.FC<IProps> = ({ countOfPages, sizeOfPages }) => {
  const styles = useStyles();

  return (
    <MPagination
      count={10}
      className={styles.pagination}
      siblingCount={countOfPages}
      size={sizeOfPages}
    />
  );
};

export default Pagination;
