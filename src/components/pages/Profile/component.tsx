import React, { useState } from "react";
import moment from "moment";
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
import { TProps } from "./types";

const tableHead = ["movieName", "date"];

const ProfilePage: React.FC<TProps> = ({ user }) => {
  const styles = useStyles();
  const [currentTabId, setCurrentTabId] = useState<number>(0);

  const data = user.tickets
    ? user.tickets.map((ticket) => ({
        _id: ticket._id,
        movieName: ticket.movieName,
        date: moment(ticket.startDate).format("YYYY.MM.DD"),
      }))
    : [];

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
                <Table tableHead={tableHead} tableData={data} withRemove />
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
