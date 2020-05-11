import { SET_ERROR } from "constants/error";
import { errorTestData } from "utils/error";
import { ISetErrorAction } from "types/error";
import setError from ".";

describe("Set error action creator", () => {
  it("Should create an action to set error", () => {
    const expectedAction: ISetErrorAction = {
      type: SET_ERROR,
      error: errorTestData,
    };

    expect(setError(errorTestData)).toEqual(expectedAction);
  });
});
