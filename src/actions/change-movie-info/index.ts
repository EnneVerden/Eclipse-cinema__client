import { IChangeMovieAction } from "./types";
import { UPDATE_MOVIE } from "constants/movies";
import { INewMovieInfo } from "types/movies";

const changeMovieInfo = (
  _id: string,
  newMovieInfo: INewMovieInfo
): IChangeMovieAction => ({
  type: UPDATE_MOVIE,
  _id,
  newMovieInfo,
});

export default changeMovieInfo;
