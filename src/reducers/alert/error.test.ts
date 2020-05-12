import { SET_ALERT } from "constants/alert";
import errorReducer from ".";
import { errorTestData } from "utils/error";

describe("Alert reducer", () => {
  it("Should return state with error alert", () => {
    const state = errorReducer(undefined, {
      type: SET_ALERT,
      alert: errorTestData,
    });

    expect(state).toEqual(errorTestData);
  });
});
