import React, { useState, useEffect, ReactElement } from "react";
import { TProps } from "./container";
import Card from "components/blocks/Card";
import Background from "components/blocks/Background";
import Container from "components/blocks/Container";
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
    <Background heightElementsAbove={218} footerHeight={100}>
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
    </Background>
  );
};

export default Grid;
