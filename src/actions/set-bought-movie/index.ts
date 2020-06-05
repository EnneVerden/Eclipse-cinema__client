import { IMovie } from "types/movies";
import { ISetBoughtMovieToState } from "types/user";
import { SET_BOUGHT_MOVIE_TO_STATE } from "constants/user";

const setBoughtMovieToState = (movie: IMovie): ISetBoughtMovieToState => ({
  type: SET_BOUGHT_MOVIE_TO_STATE,
  movie,
});

export default setBoughtMovieToState;
