import { ADD_MOVIE } from "constants/movies";

export interface IAddMovieAction {
  type: typeof ADD_MOVIE;
  movie: IMovieCustom;
}

export interface IMovieCustom {
  movieName: string;
  poster: string;
  description: string;
  tags: Array<string>;
  startDate: string;
  endDate: string;
  ticketPrice: number;
}
