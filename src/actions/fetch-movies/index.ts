import { IFetchMoviesAction } from "types/movies";
import { FETCH_MOVIES } from "constants/movies";

const fetchMovies = (
  page?: string | null,
  tag?: string
): IFetchMoviesAction => ({
  type: FETCH_MOVIES,
  page,
  tag,
});

export default fetchMovies;
