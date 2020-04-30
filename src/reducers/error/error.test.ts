import { SET_ERROR } from "@constants/error";
import errorReducer from "./error";
import { errorTestData } from "@utils/error";

describe("Error reducer", () => {
  it("Should return state with user data if receiving type", () => {
    const state = errorReducer(undefined, {
      type: SET_ERROR,
      error: errorTestData,
    });

    expect(state).toEqual(errorTestData);
  });
});
