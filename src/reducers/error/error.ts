import { SET_ERROR } from "constants/error";
import { IError, TErrorAction } from "types/error";

const initialState: IError = {};

const error = (state = initialState, action: TErrorAction): IError => {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default error;
