import { ISetMoviesToStateAction, IMoviesData } from "types/movies";
import { SET_MOVIES_TO_STATE } from "constants/movies";

const setMoviesToState = (movies: IMoviesData): ISetMoviesToStateAction => ({
  type: SET_MOVIES_TO_STATE,
  movies,
});

export default setMoviesToState;
