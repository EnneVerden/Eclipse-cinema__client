import { IUser } from "./user";
import { FETCH_USER } from "@constants/users";

export interface IUserFetchAction {
  type: typeof FETCH_USER;
  user: IUser;
}
