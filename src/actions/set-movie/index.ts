import { ISetNewMovieToState, IMovie } from "types/movies";
import { SET_NEW_MOVIE_TO_STATE } from "constants/movies";

const setNewMovieToState = (movie: IMovie): ISetNewMovieToState => ({
  type: SET_NEW_MOVIE_TO_STATE,
  movie,
});

export default setNewMovieToState;
