import { SET_ERROR } from "constants/error";

export interface IError {
  type?: "error" | "warning";
  message?: string;
}

export interface ISetErrorAction {
  type: typeof SET_ERROR;
  error: IError;
}

export type TErrorAction = ISetErrorAction;
