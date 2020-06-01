import { SET_BALANCE_TO_STATE } from "constants/user";
import { IBalance, ISetBalanceToStateAction } from "types/user";

const setBalanceToState = (balance: IBalance): ISetBalanceToStateAction => ({
  type: SET_BALANCE_TO_STATE,
  balance,
});

export default setBalanceToState;
