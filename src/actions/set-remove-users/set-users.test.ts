import { ISetRemoveUsersToStateAction } from "types/users";
import { SET_REMOVE_USERS_TO_STATE } from "constants/users";
import setRemoveUsersToState from ".";

describe("SetRemoveUsers action", () => {
  it("Should create an action to set remove users to state", () => {
    const expectedAction: ISetRemoveUsersToStateAction = {
      type: SET_REMOVE_USERS_TO_STATE,
      deletedUsersId: ["1", "2", "3"],
    };

    expect(setRemoveUsersToState(["1", "2", "3"])).toEqual(expectedAction);
  });
});
