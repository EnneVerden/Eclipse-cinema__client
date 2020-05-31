import { SET_USERS_TO_STATE } from "constants/users";
import { userTestData } from "utils/user";
import { ISetUsersToStateAction } from "types/users";
import setUsersToState from ".";

describe("SetUsers action creator", () => {
  it("Should create an action to set users", () => {
    const expectedAction: ISetUsersToStateAction = {
      type: SET_USERS_TO_STATE,
      users: [userTestData],
    };

    expect(setUsersToState([userTestData])).toEqual(expectedAction);
  });
});
