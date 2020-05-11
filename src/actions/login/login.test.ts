import { ILoginAction } from "types/authorization";
import { LOGIN } from "constants/authorization";
import login from ".";

describe("Login action creator", () => {
  it("Should create an action to login user", () => {
    const testData = {
      email: "test@gmail.com",
      password: "test",
    };

    const expectedAction: ILoginAction = {
      type: LOGIN,
      email: testData.email,
      password: testData.password,
    };

    expect(login(testData.email, testData.password)).toEqual(expectedAction);
  });
});
