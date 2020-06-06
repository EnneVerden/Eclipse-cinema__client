import { ISetNewUserInfoToState } from "types/user";
import { SET_NEW_USER_INFO_TO_STATE } from "constants/user";
import setNewUserInfoToState from ".";
import { newUserInfoTestData } from "utils/user";

describe("NewUserInfo action creator", () => {
  it("Should create an action to set new user info", () => {
    const expectedAction: ISetNewUserInfoToState = {
      type: SET_NEW_USER_INFO_TO_STATE,
      newUserInfo: newUserInfoTestData,
    };

    expect(setNewUserInfoToState(newUserInfoTestData)).toEqual(expectedAction);
  });
});
