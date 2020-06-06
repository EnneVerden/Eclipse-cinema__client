import { ISetNewUserInfoToState, INewUserInfo } from "types/user";
import { SET_NEW_USER_INFO_TO_STATE } from "constants/user";

const setNewUserInfoToState = (
  newUserInfo: INewUserInfo
): ISetNewUserInfoToState => ({
  type: SET_NEW_USER_INFO_TO_STATE,
  newUserInfo,
});

export default setNewUserInfoToState;
