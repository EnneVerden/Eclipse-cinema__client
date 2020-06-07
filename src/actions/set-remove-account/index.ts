import { ISetRemoveAccountToState } from "types/user";
import { SET_REMOVE_ACCOUNT_TO_STATE } from "constants/user";

const setRemoveAccountToState = (
  accountStatus: string
): ISetRemoveAccountToState => ({
  type: SET_REMOVE_ACCOUNT_TO_STATE,
  accountStatus,
});

export default setRemoveAccountToState;
