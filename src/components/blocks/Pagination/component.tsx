import React, { useState, useEffect } from "react";
import MPagination from "@material-ui/lab/Pagination";
import Container from "components/blocks/Container";
import { TProps } from "./container";

import useStyles from "./styles";

const Pagination: React.FC<TProps> = ({ movies, fetchMovies }) => {
  const styles = useStyles();
  const [currentPage, setCurrentPage] = useState<string>("1");
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

  useEffect(() => {
    if (!movies.pagesCount) fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.currentTag) {
      fetchMovies(currentPage, movies.currentTag);
    } else {
      fetchMovies(currentPage);
    }

    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage("1");
  }, [movies.currentTag]);

  return (
    <div className={styles.pagination}>
      <Container>
        <MPagination
          page={parseInt(currentPage)}
          count={movies.pagesCount}
          className={styles.pagination}
          siblingCount={pagesCount}
          size={pagesSize}
          onChange={(event, page) => setCurrentPage(page.toString())}
        />
      </Container>
    </div>
  );
};

export default Pagination;
