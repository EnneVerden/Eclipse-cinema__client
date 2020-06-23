import { ConnectedProps } from "react-redux";
import { connector } from "./container";

export type TProps = ConnectedProps<typeof connector> & {
  handleCloseModal: () => void;
  _id?: string;
  oldMovieName?: string;
  oldDescription?: string;
  oldTags?: Array<string>;
  oldStartDate?: string;
  oldEndDate?: string;
  oldTicketPrice?: number;
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
