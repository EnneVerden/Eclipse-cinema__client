import { IChangeUserAction } from "./types";
import { CHANGE_USER_INFO } from "constants/user";
import changeUserInfo from ".";

describe("ChangeUserInfo action creator", () => {
  it("Should create an action to change user info", () => {
    const testData = { email: "test@gmail.com", oldPassword: "1" };

    const expectedAction: IChangeUserAction = {
      type: CHANGE_USER_INFO,
      userInfoToChange: testData,
    };

    expect(changeUserInfo(testData)).toEqual(expectedAction);
  });
});
