import { TMovieAction, IMoviesData } from "types/movies";
import {
  SET_MOVIES_TO_STATE,
  SET_REMOVE_MOVIE_TO_STATE,
  SET_NEW_MOVIE_TO_STATE,
  SET_UPDATED_MOVIE_TO_STATE,
} from "constants/movies";

export type TState = IMoviesData & {};

const initialState: TState = {};

const movies = (state = initialState, action: TMovieAction): TState => {
  switch (action.type) {
    case SET_MOVIES_TO_STATE:
      return action.movies;
    case SET_NEW_MOVIE_TO_STATE:
      return {
        ...state,
        movies: state.movies?.length ? [...state.movies, action.movie] : [],
      };
    case SET_REMOVE_MOVIE_TO_STATE:
      return {
        ...state,
        movies: state.movies?.filter(
          (movie) => movie._id !== action.deletedMovieId
        ),
      };
    case SET_UPDATED_MOVIE_TO_STATE:
      return {
        ...state,
        movies: state.movies?.map((movie) =>
          movie._id === action.movie._id ? action.movie : movie
        ),
      };
    default:
      return state;
  }
};

export default movies;
