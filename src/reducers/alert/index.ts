import { SET_ALERT } from "constants/alert";
import { IAlert, TAlertAction } from "types/alert";

const initialState: IAlert = {};

const alert = (state = initialState, action: TAlertAction): IAlert => {
  switch (action.type) {
    case SET_ALERT:
      return action.alert;
    default:
      return state;
  }
};

export default alert;
