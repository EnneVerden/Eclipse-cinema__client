import { IAuthorizationAction } from "types/authorization";
import { AUTHORIZATION } from "constants/authorization";
import authorization from ".";

describe("Authorization action creator", () => {
  it("Should create an action to authorization", () => {
    const expectedAction: IAuthorizationAction = {
      type: AUTHORIZATION,
    };

    expect(authorization()).toEqual(expectedAction);
  });
});
