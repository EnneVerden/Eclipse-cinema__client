import { ConnectedProps } from "react-redux";
import { connector } from "./container";

export type TProps = ConnectedProps<typeof connector>;

export interface IDataItemProps {
  _id: string;
  movieName: string;
  date: string;
  removeTicket: (deletedTicketId: string) => void;
}
