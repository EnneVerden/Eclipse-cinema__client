import React from "react";

import Header from "components/blocks/Header";
import Filter from "components/blocks/Filter";
import Grid from "components/blocks/Grid";
import useStyles from "./styles";

const HomePage: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <Filter />
      <Grid />
    </>
  );
};

export default HomePage;
