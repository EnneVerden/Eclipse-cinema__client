import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PublishIcon from "@material-ui/icons/Publish";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Tabs from "@material-ui/core/Tabs";
import Tab from "components/blocks/Tab";
import Panel from "../Panel";
import Container from "components/blocks/Container";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import { color_pink, color_red } from "theme/variables.ts";
import { TProps } from "./types";

const InfoPanel: React.FC<TProps> = ({
  avatar,
  fullName,
  balance,
  currentTabId,
  setCurrentTabId,
  replenishBalance,
}) => {
  const [img, setImg] = useState<any>();
  const styles = useStyles();
  const history = useHistory();

  const handleLink = useCallback(() => history.push("/"), [history]);

  const handleChange = useCallback((tabId) => setCurrentTabId(tabId), [
    setCurrentTabId,
  ]);

  const handleReplenish = useCallback(() => replenishBalance(), [
    replenishBalance,
  ]);

  const handleChangeImg = useCallback((event: any) => {
    return setImg(event.target.files[0]);
  }, []);

  useEffect(() => {
    if (img) {
      console.log(img);
    }
  }, [img]);

  return (
    <Panel>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.person}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <label htmlFor="file" className={styles.uploaderLabel}>
              <input
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                className={styles.uploaderFile}
                onChange={handleChangeImg}
              />
              <PublishIcon className={styles.uploaderIcon} />
              <span className={styles.uploaderTitle}>Upload</span>
            </label>
          </div>
          <div className={styles.control}>
            <div className={styles.tabsWrapper}>
              <Tabs
                value={currentTabId}
                TabIndicatorProps={{
                  style: {
                    background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
                  },
                }}
                variant="scrollable"
                className={styles.tabs}
              >
                <Tab
                  key={0}
                  tabId={0}
                  label="Profile"
                  changeTab={handleChange}
                  className={styles.tab}
                />
                <Tab
                  key={1}
                  tabId={1}
                  label="Tickets"
                  changeTab={handleChange}
                  className={styles.tab}
                />
              </Tabs>
            </div>
            <div className={styles.buttons}>
              <Button
                type="button"
                size="large"
                variant="outlined"
                className={styles.btnHome}
                onClick={handleLink}
              >
                Home
              </Button>
              <Button
                type="button"
                size="large"
                variant="outlined"
                className={styles.btnReplenish}
                onClick={handleReplenish}
              >
                Replenish
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Panel>
  );
};

export default InfoPanel;
