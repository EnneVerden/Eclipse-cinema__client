import { IFetchMoviesAction } from "types/movies";
import { FETCH_MOVIES } from "constants/movies";

const fetchMovies = (page?: number): IFetchMoviesAction => ({
  type: FETCH_MOVIES,
  page,
});

export default fetchMovies;
