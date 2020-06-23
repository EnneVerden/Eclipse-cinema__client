import { SEARCH_MOVIE } from "constants/movies";
import { ISearchMovieAction } from "./types";

const searchMovie = (movieName: string): ISearchMovieAction => ({
  type: SEARCH_MOVIE,
  movieName,
});

export default searchMovie;
