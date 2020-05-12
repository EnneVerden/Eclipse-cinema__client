import React from "react";

import Header from "components/blocks/Header";
import Filter from "components/blocks/Filter";
import useStyles from "./styles";

const HomePage: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <Filter />
    </>
  );
};

export default HomePage;
