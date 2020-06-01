import { ConnectedProps } from "react-redux";
import { connector } from "./container";

export type TProps = ConnectedProps<typeof connector> & {
  currentTabId: number;
  setCurrentTabId: (tabId: number) => void;
};
