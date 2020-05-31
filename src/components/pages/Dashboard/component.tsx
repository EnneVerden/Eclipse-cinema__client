import React, { useState, useCallback } from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import AddBoxIcon from "@material-ui/icons/AddBox";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PageFade from "components/blocks/PageFade";
import SideMenu from "components/blocks/SideMenu";
import Table from "components/blocks/Table";
import Background from "components/blocks/Background";
import Container from "components/blocks/Container";
import Footer from "components/blocks/Footer";

import useStyles from "./styles";
import { moviesTableData, usersTableData } from "./data";

const moviesTableHead = ["name", "tags", "startDate", "endDate", "price"];
const usersTableHead = ["avatar", "fullName", "email"];

type TTabsNames = "movies" | "users" | "orders";

const DashboardPage: React.FC = () => {
  const styles = useStyles();
  const [currentTab, setCurrentTab] = useState<TTabsNames>("movies");
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState<boolean>(true);

  const handleToggle = useCallback(
    () => setSideMenuIsVisible((visible) => !visible),
    [setSideMenuIsVisible]
  );

  const handleTabChange = useCallback(
    (tabName: TTabsNames) => {
      setCurrentTab(tabName);

      if (window.innerWidth <= 1366) {
        setSideMenuIsVisible(false);
      }
    },
    [setCurrentTab, setSideMenuIsVisible]
  );

  return (
    <PageFade>
      <SideMenu
        sideMenuIsVisible={sideMenuIsVisible}
        currentTab={currentTab}
        handleToggle={handleToggle}
        handleTabChange={handleTabChange}
      />
      <Background heightElementsAbove={0.1} footerHeight={100}>
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
                  tableHead={moviesTableHead}
                  tableData={moviesTableData}
                  withEdit
                  withRemove
                />
              </div>
            </Fade>
          )}
          {currentTab === "users" && (
            <Fade in={currentTab === "users"}>
              <div>
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>Users</h2>
                  <Button
                    variant="outlined"
                    className={classNames(styles.button, styles.buttonRemove)}
                  >
                    <HighlightOffIcon />
                    <span className={styles.btnText}>Remove all</span>
                  </Button>
                </div>
                <Table
                  tableHead={usersTableHead}
                  tableData={usersTableData}
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
