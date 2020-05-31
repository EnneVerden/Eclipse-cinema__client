import React from "react";
import PageFade from "components/blocks/PageFade";
import SideMenu from "components/blocks/SideMenu";

import useStyles from "./styles";

const DashboardPage: React.FC = () => {
  const styles = useStyles();

  return (
    <PageFade>
      <SideMenu />
    </PageFade>
  );
};

export default DashboardPage;
