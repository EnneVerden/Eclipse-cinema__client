import { IRegistrationAction } from "types/authorization";
import { REGISTRATION } from "constants/authorization";
import registration from ".";

describe("Registration action creator", () => {
  it("Should create an action to registration of user", () => {
    const testData = {
      fullName: "test test",
      email: "test@gmail.com",
      password: "test",
    };

    const expectedAction: IRegistrationAction = {
      type: REGISTRATION,
      fullName: testData.fullName,
      email: testData.email,
      password: testData.password,
    };

    expect(
      registration(testData.fullName, testData.email, testData.password)
    ).toEqual(expectedAction);
  });
});
