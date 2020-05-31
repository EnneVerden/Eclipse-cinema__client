import { IUser } from "types/user";
import { TUsersAction } from "types/users";
import { SET_USERS_TO_STATE } from "constants/users";

type TState = IUser[] | [];

const initialState: TState = [];

const users = (state = initialState, action: TUsersAction): TState => {
  switch (action.type) {
    case SET_USERS_TO_STATE:
      return action.users;
    default:
      return state;
  }
};

export default users;
