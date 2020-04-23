import { FETCH_USER } from "@constants/users";
import { userTestData } from "@utils/user";
import { fetchUserSuccess } from "./login";

describe("Fetch user action creator", () => {
  it("Should create an action to fetch user", () => {
    const expectedAction = {
      type: FETCH_USER,
      user: userTestData,
    };

    expect(fetchUserSuccess(userTestData)).toEqual(expectedAction);
  });
});
