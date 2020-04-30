import { ThunkAction } from "redux-thunk";
import { TRootState } from "@reducers";
import { Action } from "redux";

export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  unknown,
  Action<string>
>;
