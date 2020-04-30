import { FETCH_USER } from "constants/users";
import { userTestData } from "utils/user";
import userReducer from "./user";

describe("Users reducer", () => {
  it("Should return state with user data if receiving type", () => {
    const state = userReducer(undefined, {
      type: FETCH_USER,
      user: userTestData,
    });

    expect(state).toEqual(userTestData);
  });
});
