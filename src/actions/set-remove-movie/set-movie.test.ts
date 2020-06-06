import { ISetRemoveMovieToState } from "types/movies";
import { SET_REMOVE_MOVIE_TO_STATE } from "constants/movies";
import setRemoveMovieToState from ".";

describe("RemoveMovie action", () => {
  it("Should create an action to remove movie", () => {
    const expectedAction: ISetRemoveMovieToState = {
      type: SET_REMOVE_MOVIE_TO_STATE,
      deletedMovieId: "1",
    };

    expect(setRemoveMovieToState("1")).toEqual(expectedAction);
  });
});
