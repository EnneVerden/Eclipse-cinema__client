import { IChangeMovieAction } from "./types";
import { UPDATE_MOVIE } from "constants/movies";
import changeMovieInfo from ".";
import { moviesTestData } from "utils/movies";

describe("ChangeMovieInfo action creator", () => {
  it("Should create an action to change movie info", () => {
    const expectedAction: IChangeMovieAction = {
      type: UPDATE_MOVIE,
      _id: "1",
      newMovieInfo: moviesTestData.movies[0],
    };

    expect(changeMovieInfo("1", moviesTestData.movies[0])).toEqual(
      expectedAction
    );
  });
});
