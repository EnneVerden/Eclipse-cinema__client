import { FETCH_USER } from "constants/users";
import { userTestData } from "utils/user";
import { registrationSuccess } from "./registration";

describe("Register user action creator", () => {
  it("Should create an action to register user", () => {
    const expectedAction = {
      type: FETCH_USER,
      user: userTestData,
    };

    expect(registrationSuccess(userTestData)).toEqual(expectedAction);
  });
});
