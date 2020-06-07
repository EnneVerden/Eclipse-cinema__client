import { IAddMovieAction } from "./types";
import { ADD_MOVIE } from "constants/movies";
import { IMovieCustom } from "./types";

const addMovie = (movie: IMovieCustom): IAddMovieAction => ({
  type: ADD_MOVIE,
  movie,
});

export default addMovie;
