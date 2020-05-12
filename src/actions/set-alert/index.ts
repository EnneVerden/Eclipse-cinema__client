import { SET_ALERT } from "constants/alert";
import { IAlert, ISetAlertAction } from "types/alert";

const setAlert = (alert: IAlert): ISetAlertAction => ({
  type: SET_ALERT,
  alert,
});

export default setAlert;
