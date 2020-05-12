import { IClearUserStateAction } from "types/authorization";
import { CLEAR_USER_STATE } from "constants/authorization";

const clearUserState = (): IClearUserStateAction => ({
  type: CLEAR_USER_STATE,
});

export default clearUserState;
