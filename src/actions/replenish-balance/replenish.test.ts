import { IReplenishBalanceAction } from "types/user";
import { REPLENISH_BALANCE } from "constants/user";
import replenishBalance from ".";

describe("ReplenishBalance action creator", () => {
  it("Should create an action to replenish balance", () => {
    const expectedAction: IReplenishBalanceAction = {
      type: REPLENISH_BALANCE,
    };

    expect(replenishBalance()).toEqual(expectedAction);
  });
});
