import React from "react";
import Header from "components/blocks/Header";

import useStyles from "./styles";
import InfoPanel from "components/blocks/InfoPanel";
import Background from "components/blocks/Background";
import Container from "components/blocks/Container";
import ProfileForm from "components/forms/ProfileForm";
import PasswordForm from "components/forms/PasswordForm";
import Footer from "components/blocks/Footer";

const ProfilePage: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <InfoPanel />
      <Background heightElementsAbove={195} footerHeight={100}>
        <Container>
          <div className={styles.panel}>
            <ProfileForm />
            <PasswordForm />
          </div>
        </Container>
      </Background>
      <Footer />
    </>
  );
};

export default ProfilePage;
