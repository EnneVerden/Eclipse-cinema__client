import { ISetNewMovieInfoToState } from "types/movies";
import { SET_UPDATED_MOVIE_TO_STATE } from "constants/movies";
import setNewMovieInfoToState from ".";
import { moviesTestData } from "utils/movies";

describe("NewMovieInfo action creator", () => {
  it("Should create an action to set new movie info", () => {
    const expectedAction: ISetNewMovieInfoToState = {
      type: SET_UPDATED_MOVIE_TO_STATE,
      movie: moviesTestData.movies[0],
    };

    expect(setNewMovieInfoToState(moviesTestData.movies[0])).toEqual(
      expectedAction
    );
  });
});
