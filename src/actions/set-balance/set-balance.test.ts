import { SET_BALANCE_TO_STATE } from "constants/user";
import { ISetBalanceToStateAction } from "types/user";
import { balanceTestData } from "utils/user";
import setBalance from ".";

describe("setBalance action creator", () => {
  it("Should create an action to set balance", () => {
    const expectedAction: ISetBalanceToStateAction = {
      type: SET_BALANCE_TO_STATE,
      balance: balanceTestData,
    };

    expect(setBalance(balanceTestData)).toEqual(expectedAction);
  });
});
