import React from "react";
import Header from "components/blocks/Header";

import useStyles from "./styles";
import InfoPanel from "components/blocks/InfoPanel";

const ProfilePage: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <InfoPanel />
    </>
  );
};

export default ProfilePage;
