import { ISetBoughtMovieToState } from "types/user";
import { SET_BOUGHT_MOVIE_TO_STATE } from "constants/user";
import { moviesTestData } from "utils/movies";
import setBoughtMovieToState from ".";

describe("SetBoughtMovie action", () => {
  it("Should create an action to set bought movie", () => {
    const expectedAction: ISetBoughtMovieToState = {
      type: SET_BOUGHT_MOVIE_TO_STATE,
      movie: moviesTestData.movies[0],
    };

    expect(setBoughtMovieToState(moviesTestData.movies[0])).toEqual(
      expectedAction
    );
  });
});
