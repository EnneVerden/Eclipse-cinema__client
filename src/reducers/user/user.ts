import { IUser, TUserAction } from "types/user";
import { SET_USER_TO_STATE } from "constants/users";

type TState = IUser | {};

const initialState: TState = {};

const user = (state = initialState, action: TUserAction): TState => {
  switch (action.type) {
    case SET_USER_TO_STATE:
      return action.user;
    default:
      return state;
  }
};

export default user;
