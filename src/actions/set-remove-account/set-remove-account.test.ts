import { ISetRemoveAccountToState } from "types/user";
import { SET_REMOVE_ACCOUNT_TO_STATE } from "constants/user";
import setRemoveAccountToState from ".";

describe("RemoveAccount action", () => {
  it("Should create an action to remove account", () => {
    const testAccountStatus = "deletion";

    const expectedAction: ISetRemoveAccountToState = {
      type: SET_REMOVE_ACCOUNT_TO_STATE,
      accountStatus: testAccountStatus,
    };

    expect(setRemoveAccountToState(testAccountStatus)).toEqual(expectedAction);
  });
});
