import React from "react";
import PageFade from "components/blocks/PageFade";
import Header from "components/blocks/Header";
import Filter from "components/blocks/Filter";
import Grid from "components/blocks/Grid";
import Pagination from "components/blocks/Pagination";
import Footer from "components/blocks/Footer";

const HomePage: React.FC = () => {
  return (
    <PageFade>
      <Header />
      <Filter />
      <Grid />
      <Pagination />
      <Footer />
    </PageFade>
  );
};

export default HomePage;
