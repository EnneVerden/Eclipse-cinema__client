import React, { useCallback } from "react";
import MuiTab from "@material-ui/core/Tab";
import classNames from "classnames";

import useStyles from "./styles";

interface IProps {
  id?: string | null;
  label: string;
  tabId: number;
  className?: string;
  changeTab: (newTabId: number) => any;
}

const Tab: React.FC<IProps> = ({ id, label, tabId, className, changeTab }) => {
  const styles = useStyles();

  const handleClick = useCallback(() => changeTab(tabId), [tabId, changeTab]);

  return (
    <MuiTab
      label={label}
      onClick={handleClick}
      className={classNames(styles.tab, className ? className : null)}
      disableTouchRipple={true}
    />
  );
};

export default Tab;
