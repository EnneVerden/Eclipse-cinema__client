import { UPDATE_MOVIE } from "constants/movies";
import { INewMovieInfo } from "types/movies";

export interface IChangeMovieAction {
  type: typeof UPDATE_MOVIE;
  _id: string;
  newMovieInfo: INewMovieInfo;
}
