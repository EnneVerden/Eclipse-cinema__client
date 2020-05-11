import { SET_USER_TO_STATE } from "constants/authorization";
import { userTestData } from "utils/user";
import userReducer from "./user";

describe("Users reducer", () => {
  it("Should return state with user data if receiving type", () => {
    const state = userReducer(undefined, {
      type: SET_USER_TO_STATE,
      user: userTestData,
    });

    expect(state).toEqual(userTestData);
  });
});
