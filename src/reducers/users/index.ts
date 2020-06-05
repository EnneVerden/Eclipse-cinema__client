import { IUser } from "types/user";
import { TUsersAction } from "types/users";
import { SET_USERS_TO_STATE, SET_REMOVE_USERS_TO_STATE } from "constants/users";

type TState = IUser[] | [];

const initialState: TState = [];

const users = (state = initialState, action: TUsersAction): TState => {
  switch (action.type) {
    case SET_USERS_TO_STATE:
      return action.users;
    case SET_REMOVE_USERS_TO_STATE:
      return state.filter(
        (user) => user._id && !action.deletedUsersId.includes(user._id)
      );
    default:
      return state;
  }
};

export default users;
