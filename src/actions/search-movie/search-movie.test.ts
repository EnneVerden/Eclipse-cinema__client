import { ISearchMovieAction } from "./types";
import { SEARCH_MOVIE } from "constants/movies";
import searchMovie from ".";

describe("SearchMovie action creator", () => {
  it("Should create an action to search movie", () => {
    const testMovieName = "Blade runner 2049";

    const expectedAction: ISearchMovieAction = {
      type: SEARCH_MOVIE,
      movieName: testMovieName,
    };

    expect(searchMovie(testMovieName)).toEqual(expectedAction);
  });
});
