import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import PageFade from "components/blocks/PageFade/component";
import Header from "components/blocks/Header";
import InfoPanel from "components/blocks/InfoPanel";
import Background from "components/blocks/Background";
import Container from "components/blocks/Container";
import ProfileForm from "components/forms/ProfileForm";
import PasswordForm from "components/forms/PasswordForm";
import Table from "components/blocks/Table";
import Footer from "components/blocks/Footer";

import useStyles from "./styles";

const tableHead = ["name", "date"];

const tableData = [
  { _id: 1, name: "Blade runner 2049", date: "2020.07.15" },
  { _id: 2, name: "Blade runner 2048", date: "2020.07.15" },
  { _id: 3, name: "Blade runner 2047", date: "2020.07.15" },
  { _id: 4, name: "Blade runner 2046", date: "2020.07.15" },
  { _id: 5, name: "Blade runner 2045", date: "2020.07.15" },
  { _id: 6, name: "Blade runner 2044", date: "2020.07.15" },
  { _id: 7, name: "Blade runner 2043", date: "2020.07.15" },
  { _id: 8, name: "Blade runner 2042", date: "2020.07.15" },
  { _id: 9, name: "Blade runner 2041", date: "2020.07.15" },
  { _id: 10, name: "Blade runner 2039", date: "2020.07.15" },
  { _id: 11, name: "Blade runner 2038", date: "2020.07.15" },
  { _id: 12, name: "Blade runner 2037", date: "2020.07.15" },
];

const ProfilePage: React.FC = () => {
  const styles = useStyles();
  const [currentTabId, setCurrentTabId] = useState<number>(0);

  return (
    <PageFade>
      <Header />
      <InfoPanel
        currentTabId={currentTabId}
        setCurrentTabId={setCurrentTabId}
      />
      <Background heightElementsAbove={195} footerHeight={100}>
        <Container>
          {currentTabId === 0 && (
            <Fade in={currentTabId === 0}>
              <div className={styles.panel}>
                <ProfileForm />
                <PasswordForm />
              </div>
            </Fade>
          )}
          {currentTabId === 1 && (
            <Fade in={currentTabId === 1}>
              <div>
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>My tickets</h2>
                </div>
                <Table tableHead={tableHead} tableData={tableData} withRemove />
              </div>
            </Fade>
          )}
        </Container>
      </Background>
      <Footer />
    </PageFade>
  );
};

export default ProfilePage;
