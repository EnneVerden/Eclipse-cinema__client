import { ISetNewMovieInfoToState, IMovie } from "types/movies";
import { SET_UPDATED_MOVIE_TO_STATE } from "constants/movies";

const setNewMovieInfoToState = (movie: IMovie): ISetNewMovieInfoToState => ({
  type: SET_UPDATED_MOVIE_TO_STATE,
  movie,
});

export default setNewMovieInfoToState;
