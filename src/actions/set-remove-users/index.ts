import { ISetRemoveUsersToStateAction } from "types/users";
import { SET_REMOVE_USERS_TO_STATE } from "constants/users";

const setRemoveUsersToState = (
  deletedUsersId: string[]
): ISetRemoveUsersToStateAction => ({
  type: SET_REMOVE_USERS_TO_STATE,
  deletedUsersId,
});

export default setRemoveUsersToState;
