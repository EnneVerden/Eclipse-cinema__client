import { IAddMovieAction } from "./types";
import { ADD_MOVIE } from "constants/movies";
import { moviesTestData } from "utils/movies";
import addMovie from ".";

describe("AddMovie action creator", () => {
  it("Should create an action to add movie", () => {
    const expectedAction: IAddMovieAction = {
      type: ADD_MOVIE,
      movie: moviesTestData.movies[0],
    };

    expect(addMovie(moviesTestData.movies[0])).toEqual(expectedAction);
  });
});
