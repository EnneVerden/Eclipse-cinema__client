import { IFetchMoviesAction } from "types/movies";
import { FETCH_MOVIES } from "constants/movies";
import fetchMovies from ".";

describe("FetchMovies action creator", () => {
  it("Should create an action to fetch movies", () => {
    const expectedAction: IFetchMoviesAction = {
      type: FETCH_MOVIES,
    };

    expect(fetchMovies()).toEqual(expectedAction);
  });

  it("Should create an action to fetch movies with param 'page'", () => {
    const expectedAction: IFetchMoviesAction = {
      type: FETCH_MOVIES,
      page: 1,
    };

    expect(fetchMovies(1)).toEqual(expectedAction);
  });
});
