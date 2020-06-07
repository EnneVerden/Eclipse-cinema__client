import { ISetNewMovieToState } from "types/movies";
import { SET_NEW_MOVIE_TO_STATE } from "constants/movies";
import { moviesTestData } from "utils/movies";
import setNewMovieToState from ".";

describe("SetNewMovie action", () => {
  it("Should create an action to set new movie", () => {
    const expectedAction: ISetNewMovieToState = {
      type: SET_NEW_MOVIE_TO_STATE,
      movie: moviesTestData.movies[0],
    };

    expect(setNewMovieToState(moviesTestData.movies[0])).toEqual(
      expectedAction
    );
  });
});
