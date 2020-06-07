import { IRemoveAccountAction } from "./types";
import { REMOVE_ACCOUNT } from "constants/user";
import removeAccount from ".";

describe("RemoveAccount action creator", () => {
  it("Should create an action to remove account", () => {
    const expectedAction: IRemoveAccountAction = {
      type: REMOVE_ACCOUNT,
    };

    expect(removeAccount()).toEqual(expectedAction);
  });
});
