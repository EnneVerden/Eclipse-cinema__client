import { SEARCH_MOVIE } from "constants/movies";

export interface ISearchMovieAction {
  type: typeof SEARCH_MOVIE;
  movieName: string;
}
