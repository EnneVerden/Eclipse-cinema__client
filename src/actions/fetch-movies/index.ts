import { IFetchMoviesAction } from "types/movies";
import { FETCH_MOVIES } from "constants/movies";

const fetchMovies = (): IFetchMoviesAction => ({
  type: FETCH_MOVIES,
});

export default fetchMovies;
