import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import AddBoxIcon from "@material-ui/icons/AddBox";
import PageFade from "components/blocks/PageFade";
import SideMenu from "components/blocks/SideMenu";
import Table from "components/blocks/Table";
import Background from "components/blocks/Background";
import Container from "components/blocks/Container";
import Footer from "components/blocks/Footer";

import useStyles from "./styles";

const tableHead = ["name", "tags", "startDate", "endDate", "price"];

const tableData = [
  {
    _id: 1,
    name: "Blade runner 2049",
    tags: "Action, Drama, Sci-Fi",
    startDate: "2020.07.15",
    endDate: "2020.07.22",
    price: "10",
  },
  {
    _id: 2,
    name: "Mortal Engines",
    tags: "Action, Drama, Sci-Fi",
    startDate: "2020.07.15",
    endDate: "2020.07.22",
    price: "10",
  },
  {
    _id: 3,
    name: "In Time",
    tags: "Action, Drama, Sci-Fi",
    startDate: "2020.07.15",
    endDate: "2020.07.22",
    price: "10",
  },
  {
    _id: 4,
    name: "Maleficent",
    tags: "Action, Drama, Sci-Fi",
    startDate: "2020.07.15",
    endDate: "2020.07.22",
    price: "10",
  },
  {
    _id: 5,
    name: "Warcraft",
    tags: "Action, Drama, Sci-Fi",
    startDate: "2020.07.15",
    endDate: "2020.07.22",
    price: "10",
  },
  {
    _id: 6,
    name: "Harry Potter",
    tags: "Action, Drama, Sci-Fi",
    startDate: "2020.07.15",
    endDate: "2020.07.22",
    price: "10",
  },
  {
    _id: 7,
    name: "Equilibrium",
    tags: "Action, Drama, Sci-Fi",
    startDate: "2020.07.15",
    endDate: "2020.07.22",
    price: "10",
  },
];

type TTabsNames = "movies" | "users" | "orders";

const DashboardPage: React.FC = () => {
  const styles = useStyles();
  const [currentTab, setCurrentTab] = useState<TTabsNames>("movies");

  const handleTabChange = useCallback(
    (tabName: TTabsNames) => setCurrentTab(tabName),
    [setCurrentTab]
  );

  return (
    <PageFade>
      <SideMenu handleTabChange={handleTabChange} />
      <Background heightElementsAbove={0} footerHeight={100}>
        <Container>
          {currentTab === "movies" && (
            <Fade in={currentTab === "movies"}>
              <div>
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>Movies</h2>
                  <Button variant="outlined" className={styles.button}>
                    <AddBoxIcon />
                    <span className={styles.btnText}>New movie</span>
                  </Button>
                </div>
                <Table
                  tableHead={tableHead}
                  tableData={tableData}
                  withEdit
                  withRemove
                />
              </div>
            </Fade>
          )}
        </Container>
      </Background>
      <Footer />
    </PageFade>
  );
};

export default DashboardPage;
