import { IUser, TUserAction } from "types/user";
import { FETCH_USER } from "constants/users";

type TState = IUser | {};

const initialState: TState = {};

const user = (state = initialState, action: TUserAction): TState => {
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    default:
      return state;
  }
};

export default user;
