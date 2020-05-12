import { IMovie, ISetMoviesToStateAction } from "types/movies";
import { SET_MOVIES_TO_STATE } from "constants/movies";

type TState = Array<IMovie> | [];

const initialState: TState = [];

const tags = (
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

export default tags;
