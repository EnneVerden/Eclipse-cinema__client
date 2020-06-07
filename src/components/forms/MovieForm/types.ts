import { ConnectedProps } from "react-redux";
import { connector } from "./container";

export type TProps = ConnectedProps<typeof connector> & {
  handleCloseModal: () => void;
};

export type TFieldNames =
  | "poster"
  | "movieName"
  | "description"
  | "tags"
  | "startDate"
  | "endDate"
  | "ticketPrice";

export interface IMovieCustom {
  movieName: string;
  poster: string;
  description: string;
  tags: Array<string>;
  startDate: string;
  endDate: string;
  ticketPrice: number;
}
