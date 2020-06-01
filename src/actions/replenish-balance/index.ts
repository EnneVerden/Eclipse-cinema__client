import { IReplenishBalanceAction } from "types/user";
import { REPLENISH_BALANCE } from "constants/user";

const replenishBalance = (): IReplenishBalanceAction => ({
  type: REPLENISH_BALANCE,
});

export default replenishBalance;
