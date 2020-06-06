import { IChangeUserAction } from "./types";
import { CHANGE_USER_INFO } from "constants/user";
import { IUserInfoToChange } from "types/user";

const changeUserInfo = (
  userInfoToChange: IUserInfoToChange
): IChangeUserAction => ({
  type: CHANGE_USER_INFO,
  userInfoToChange,
});

export default changeUserInfo;
