import { SET_ERROR } from "constants/error";
import { errorTestData } from "utils/error";
import setError from "./set-error";

describe("Set error action creator", () => {
  it("Should create an action to set error", () => {
    const expectedAction = {
      type: SET_ERROR,
      error: errorTestData,
    };

    expect(setError(errorTestData)).toEqual(expectedAction);
  });
});
