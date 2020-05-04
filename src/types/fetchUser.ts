import { IUser } from "./user";
import { SET_USER_TO_STATE } from "constants/users";
import { LOGIN, REGISTRATION } from "constants/users";

export interface IAuth {
  type: typeof LOGIN | typeof REGISTRATION;
  email: string;
  fullName?: string;
  password: string;
}

export interface ISetUserToState {
  type: typeof SET_USER_TO_STATE;
  user: IUser;
}
