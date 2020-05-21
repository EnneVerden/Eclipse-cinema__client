import { ISetMoviesToStateAction, IMoviesData } from "types/movies";
import { SET_MOVIES_TO_STATE } from "constants/movies";

export type TState = IMoviesData | {};

const initialState: TState = {};

const movies = (
  state = initialState,
  action: ISetMoviesToStateAction
): TState => {
  switch (action.type) {
    case SET_MOVIES_TO_STATE:
      return action.movies;
    default:
      return state;
  }
};

export default movies;
