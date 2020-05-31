import { SET_USERS_TO_STATE } from "constants/users";
import { userTestData } from "utils/user";
import usersReducer from ".";

describe("Users reducer", () => {
  it("Should return state with users data if receiving type", () => {
    const state = usersReducer(undefined, {
      type: SET_USERS_TO_STATE,
      users: [userTestData],
    });

    expect(state).toEqual([userTestData]);
  });
});
