import { IUser, TUserAction } from "types/user";
import { SET_USER_TO_STATE, LOGOUT } from "constants/users";

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
