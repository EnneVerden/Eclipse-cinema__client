import { REMOVE_MOVIE } from "constants/movies";

export interface IRemoveMovieAction {
  type: typeof REMOVE_MOVIE;
  movieIdToDelete: string;
}
