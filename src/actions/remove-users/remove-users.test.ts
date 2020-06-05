import { IRemoveUsersAction } from "./types";
import { REMOVE_USERS } from "constants/users";
import removeUsers from ".";

describe("RemoveUsers action creator", () => {
  it("Should create an action to remove users", () => {
    const testData = "1";

    const expectedAction: IRemoveUsersAction = {
      type: REMOVE_USERS,
    };

    expect(removeUsers(testData)).toEqual(expectedAction);
  });
});
