import { IUser } from "types/user";
import { ISetUsersToStateAction } from "types/users";
import { SET_USERS_TO_STATE } from "constants/users";

const setUsersToState = (users: IUser[]): ISetUsersToStateAction => ({
  type: SET_USERS_TO_STATE,
  users,
});

export default setUsersToState;
