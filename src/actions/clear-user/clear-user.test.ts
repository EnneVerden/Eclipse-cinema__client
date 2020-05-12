import { IClearUserStateAction } from "types/authorization";
import { CLEAR_USER_STATE } from "constants/authorization";
import clearUserState from ".";

describe("ClearUserState action creator", () => {
  it("Should create an action to clear user state", () => {
    const expectedAction: IClearUserStateAction = {
      type: CLEAR_USER_STATE,
    };

    expect(clearUserState()).toEqual(expectedAction);
  });
});
