import { ILogoutAction } from "types/authorization";
import { LOGOUT } from "constants/authorization";
import logout from ".";

describe("Logout action creator", () => {
  it("Should create an creator to logout user", () => {
    const expectedAction: ILogoutAction = {
      type: LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });
});
