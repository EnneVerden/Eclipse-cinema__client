import { IUser } from "types/user";
import { TUserAction } from "types/authorization";
import { SET_USER_TO_STATE, LOGOUT } from "constants/authorization";

type TState = IUser | {};

const initialState: TState = {};

const user = (state = initialState, action: TUserAction): TState => {
  switch (action.type) {
    case SET_USER_TO_STATE:
      return action.user;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
