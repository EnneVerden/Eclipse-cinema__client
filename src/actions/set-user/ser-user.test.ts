import { SET_USER_TO_STATE } from "constants/authorization";
import { userTestData } from "utils/user";
import { ISetUserToStateAction } from "types/authorization";
import setUserToState from ".";

describe("Set user action creator", () => {
  it("Should create an action to set user", () => {
    const expectedAction: ISetUserToStateAction = {
      type: SET_USER_TO_STATE,
      user: userTestData,
    };

    expect(setUserToState(userTestData)).toEqual(expectedAction);
  });
});
