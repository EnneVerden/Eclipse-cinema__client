import React, { useState, useEffect, ReactElement } from "react";
import { TProps } from "./container";
import Card from "components/blocks/Card";
import Container from "components/blocks/Container";

import useStyles from "./styles";

const Grid: React.FC<TProps> = ({ movies, fetchMovies }) => {
  const styles = useStyles();
  const [content, setContent] = useState<ReactElement[] | []>([]);

  useEffect(() => {
    if (!movies.length) fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length) {
      const newContent = movies.map((movie) => (
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
    }
  }, [movies]);

  return (
    <div className={styles.grid}>
      <Container>
        <div className={styles.wrapper}>{content}</div>
      </Container>
    </div>
  );
};

export default Grid;
