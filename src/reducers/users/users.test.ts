import { SET_USERS_TO_STATE, SET_REMOVE_USERS_TO_STATE } from "constants/users";
import { userTestData } from "utils/user";
import { usersTestData } from "utils/users";
import usersReducer from ".";

describe("Users reducer", () => {
  it("Should return state with users data if receiving type", () => {
    const state = usersReducer(undefined, {
      type: SET_USERS_TO_STATE,
      users: [userTestData],
    });

    expect(state).toEqual([userTestData]);
  });

  it("Should return state without deleted users if receiving type", () => {
    const initialState = usersTestData;
    const expectedData = usersTestData.filter(
      (user) => user._id && !["1"].includes(user._id)
    );

    const state = usersReducer(initialState, {
      type: SET_REMOVE_USERS_TO_STATE,
      deletedUsersId: ["1"],
    });

    expect(state).toEqual(expectedData);
  });
});
