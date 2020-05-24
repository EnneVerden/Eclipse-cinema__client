import { TUserAction } from "types/authorization";
import { SET_USER_TO_STATE, CLEAR_USER_STATE } from "constants/authorization";

type TState = any;

const initialState: TState = {};

const user = (state = initialState, action: TUserAction): TState => {
  switch (action.type) {
    case SET_USER_TO_STATE:
      return action.user;
    case CLEAR_USER_STATE:
      return initialState;
    default:
      return state;
  }
};

export default user;
