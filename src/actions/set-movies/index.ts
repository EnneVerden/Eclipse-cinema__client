import { IMovie, ISetMoviesToStateAction } from "types/movies";
import { SET_MOVIES_TO_STATE } from "constants/movies";

const setMoviesToState = (movies: Array<IMovie>): ISetMoviesToStateAction => ({
  type: SET_MOVIES_TO_STATE,
  movies,
});

export default setMoviesToState;
