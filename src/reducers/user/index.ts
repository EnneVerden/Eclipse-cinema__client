import { IUser } from "types/user";
import { TUserAction } from "types/user";
import { SET_USER_TO_STATE, CLEAR_USER_STATE } from "constants/authorization";
import { SET_BALANCE_TO_STATE } from "constants/user";

type TState = IUser | {};

const initialState: TState = {};

const user = (state = initialState, action: TUserAction): TState => {
  switch (action.type) {
    case SET_USER_TO_STATE:
      return action.user;
    case SET_BALANCE_TO_STATE:
      return { ...state, balance: action.balance.balance };
    case CLEAR_USER_STATE:
      return initialState;
    default:
      return state;
  }
};

export default user;
