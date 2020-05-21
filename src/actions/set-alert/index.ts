import { SET_ALERT } from "constants/alert";
import { IAlert, ISetAlertToStateAction } from "types/alert";

const setAlertToState = (alert: IAlert): ISetAlertToStateAction => ({
  type: SET_ALERT,
  alert,
});

export default setAlertToState;
