import { SET_ALERT } from "constants/alert";

export interface IAlert {
  type?: "success" | "error" | "warning";
  message?: string;
}

export interface ISetAlertToStateAction {
  type: typeof SET_ALERT;
  alert: IAlert;
}
