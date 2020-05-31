import { ConnectedProps } from "react-redux";
import { connector } from "./container";

export type TTabsNames = "movies" | "users" | "orders";

export type TProps = ConnectedProps<typeof connector> & {
  sideMenuIsVisible: boolean;
  currentTab?: TTabsNames;
  handleToggle: () => void;
  handleTabChange: (tabName: TTabsNames) => void;
};
