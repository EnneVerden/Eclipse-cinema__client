import { IRemoveMovieAction } from "./types";
import { REMOVE_MOVIE } from "constants/movies";

const removeMovie = (movieIdToDelete: string): IRemoveMovieAction => ({
  type: REMOVE_MOVIE,
  movieIdToDelete,
});

export default removeMovie;
