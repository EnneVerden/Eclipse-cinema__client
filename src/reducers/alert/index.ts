import { SET_ALERT } from "constants/alert";
import { IAlert, ISetAlertToStateAction } from "types/alert";

const initialState: IAlert = {};

const alert = (
  state = initialState,
  action: ISetAlertToStateAction
): IAlert => {
  switch (action.type) {
    case SET_ALERT:
      return action.alert;
    default:
      return state;
  }
};

export default alert;
