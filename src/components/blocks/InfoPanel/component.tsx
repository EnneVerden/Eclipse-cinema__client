import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Tabs from "@material-ui/core/Tabs";
import Tab from "components/blocks/Tab";
import Panel from "../Panel";
import Container from "components/blocks/Container";
import Button from "@material-ui/core/Button";
import { TProps } from "./container";

import useStyles from "./styles";
import { color_pink, color_red } from "theme/variables.ts";

const InfoPanel: React.FC<TProps> = ({
  user: { avatar, fullName, balance } = {},
}) => {
  const styles = useStyles();
  const history = useHistory();
  const [currentTabId, setCurrentTabId] = useState<number>(0);

  const handleLink = useCallback(() => history.push("/"), [history]);

  const handleChange = useCallback((tabId) => setCurrentTabId(tabId), [
    setCurrentTabId,
  ]);

  return (
    <Panel>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.person}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <div className={styles.information}>
              <span className={styles.name}>{fullName}</span>
              <span className={styles.balance}>
                <AccountBalanceWalletIcon className={styles.icon} />
                Balance: {balance}$
              </span>
            </div>
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
