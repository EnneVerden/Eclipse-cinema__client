import { IUser } from "types/user";
import { ISetUserToStateAction } from "types/authorization";
import { SET_USER_TO_STATE } from "constants/authorization";

const setUserToState = (user: IUser): ISetUserToStateAction => ({
  type: SET_USER_TO_STATE,
  user,
});

export default setUserToState;
