import { IFetchUsersAction } from "types/users";
import { FETCH_USERS } from "constants/users";
import fetchUsers from ".";

describe("FetchUsers action creator", () => {
  it("Should create an action to fetch users", () => {
    const expectedAction: IFetchUsersAction = {
      type: FETCH_USERS,
    };

    expect(fetchUsers()).toEqual(expectedAction);
  });
});
