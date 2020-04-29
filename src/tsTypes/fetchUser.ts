import { IUser } from "./user";
import { Dispatch } from "redux";
import { FETCH_USER } from "@constants/users";
import { ThunkAction } from "redux-thunk";
import { TAppState } from "@reducers";

export interface IUserFetchAction {
  type: typeof FETCH_USER;
  user: IUser;
}

export type TUserFetchDispatch = Dispatch<IUserFetchAction>;

export type TUserFetchThunk = ThunkAction<
  Promise<IUserFetchAction | undefined>,
  TAppState,
  unknown,
  IUserFetchAction
>;
