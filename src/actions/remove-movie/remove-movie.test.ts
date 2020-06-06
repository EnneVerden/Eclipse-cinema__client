import { IRemoveMovieAction } from "./types";
import { REMOVE_MOVIE } from "constants/movies";
import removeMovie from ".";

describe("RemoveMovie action creator", () => {
  it("Should create an action to remove movie", () => {
    const testData = "1";

    const expectedAction: IRemoveMovieAction = {
      type: REMOVE_MOVIE,
      movieIdToDelete: testData,
    };

    expect(removeMovie(testData)).toEqual(expectedAction);
  });
});
