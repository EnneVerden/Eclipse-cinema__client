import React, { useState, useEffect, ReactElement } from "react";
import { TProps } from "./container";
import Card from "components/blocks/Card";
import Container from "components/blocks/Container";
import Loader from "components/blocks/Loader";
import classNames from "classnames";

import useStyles from "./styles";

const Grid: React.FC<TProps> = ({ movies, fetchMovies }) => {
  const styles = useStyles();
  const [content, setContent] = useState<
    ReactElement[] | [] | "No movies found!"
  >([]);

  useEffect(() => {
    if (!movies.movies) fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.movies?.length) {
      const newContent = movies.movies.map((movie) => (
        <Card
          key={movie._id}
          name={movie.name}
          poster={movie.poster}
          description={movie.description}
          tags={movie.tags}
          startDate={movie.startDate}
          endDate={movie.endDate}
          ticketPrice={movie.ticketPrice}
        />
      ));

      setContent(newContent);
    } else {
      setContent("No movies found!");
    }
  }, [movies]);

  return (
    <div className={styles.grid}>
      <Container>
        <div
          className={classNames(
            !movies.movies?.length
              ? classNames(styles.warningWrapper, styles.warning)
              : styles.wrapper
          )}
        >
          {content}
        </div>
      </Container>
    </div>
  );
};

export default Grid;
