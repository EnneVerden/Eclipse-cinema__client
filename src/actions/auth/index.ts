import {
  LOGIN,
  SET_USER_TO_STATE,
  REGISTRATION,
  LOGOUT,
} from "constants/users";
import { IUser } from "types/user";
import { ISetUserToState, IAuth, ILogout } from "types/fetchUser";

export const login = (email: string, password: string): IAuth => ({
  type: LOGIN,
  email,
  password,
});

export const registration = (
  fullName: string,
  email: string,
  password: string
): IAuth => ({
  type: REGISTRATION,
  fullName,
  email,
  password,
});

export const logout = (): ILogout => ({
  type: LOGOUT,
});

export const setUserToState = (user: IUser): ISetUserToState => ({
  type: SET_USER_TO_STATE,
  user,
});
