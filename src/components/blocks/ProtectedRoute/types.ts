import { ConnectedProps } from "react-redux";
import { connector } from "./container";
import { IUser } from "types/user";

export type TProps = ConnectedProps<typeof connector> & {
  component: React.FC;
  user: IUser | {};
  exact?: boolean;
  path: string;
  auth?: boolean;
};
