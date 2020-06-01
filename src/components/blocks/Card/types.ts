import { ConnectedProps } from "react-redux";
import { connector } from "./container";
import { ITag } from "types/tags";

export type TProps = ConnectedProps<typeof connector> & {
  _id: string;
  name: string;
  poster: string;
  description: string;
  tags: Array<ITag>;
  startDate: string;
  endDate: string;
  ticketPrice: number;
};
