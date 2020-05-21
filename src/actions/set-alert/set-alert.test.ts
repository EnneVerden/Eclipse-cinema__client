import { SET_ALERT } from "constants/alert";
import { errorTestData } from "utils/error";
import { ISetAlertToStateAction } from "types/alert";
import setAlert from ".";

describe("setAlert action creator", () => {
  it("Should create an action to set error", () => {
    const expectedAction: ISetAlertToStateAction = {
      type: SET_ALERT,
      alert: errorTestData,
    };

    expect(setAlert(errorTestData)).toEqual(expectedAction);
  });
});
