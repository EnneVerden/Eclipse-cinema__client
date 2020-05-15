import React, { useState, useEffect } from "react";
import MPagination from "@material-ui/lab/Pagination";

import useStyles from "./styles";
import { Container } from "@material-ui/core";

const Pagination: React.FC = () => {
  const styles = useStyles();
  const [pagesCount, setPagesCount] = useState<number>(2);
  const [pagesSize, setPagesSize] = useState<"medium" | "large">("large");

  useEffect(() => {
    const screenWidth = document.documentElement.clientWidth;

    if (screenWidth < 365) {
      setPagesCount(0);
      setPagesSize("medium");
    } else if (screenWidth < 600) {
      setPagesCount(0);
      setPagesSize("large");
    }
  }, []);

  return (
    <div className={styles.pagination}>
      <Container>
        <MPagination
          count={10}
          className={styles.pagination}
          siblingCount={pagesCount}
          size={pagesSize}
        />
      </Container>
    </div>
  );
};

export default Pagination;
