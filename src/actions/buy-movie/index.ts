import { IBuyMovieAction } from "types/user";
import { BUY_MOVIE } from "constants/user";

const buyMovie = (movieId: string): IBuyMovieAction => ({
  type: BUY_MOVIE,
  movieId,
});

export default buyMovie;
