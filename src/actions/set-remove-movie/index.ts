import { ISetRemoveMovieToState } from "types/movies";
import { SET_REMOVE_MOVIE_TO_STATE } from "constants/movies";

const setRemoveMovieToState = (
  deletedMovieId: string
): ISetRemoveMovieToState => ({
  type: SET_REMOVE_MOVIE_TO_STATE,
  deletedMovieId,
});

export default setRemoveMovieToState;
