import { CHANGE_USER_INFO } from "constants/user";
import { IUserInfoToChange } from "types/user";

export interface IChangeUserAction {
  type: typeof CHANGE_USER_INFO;
  userInfoToChange: IUserInfoToChange;
}
