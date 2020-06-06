import { TMovieAction, IMoviesData } from "types/movies";
import {
  SET_MOVIES_TO_STATE,
  SET_REMOVE_MOVIE_TO_STATE,
} from "constants/movies";

export type TState = IMoviesData & {};

const initialState: TState = {};

const movies = (state = initialState, action: TMovieAction): TState => {
  switch (action.type) {
    case SET_MOVIES_TO_STATE:
      return action.movies;
    case SET_REMOVE_MOVIE_TO_STATE:
      return {
        ...state,
        movies: state.movies?.filter(
          (movie) => movie._id !== action.deletedMovieId
        ),
      };
    default:
      return state;
  }
};

export default movies;
