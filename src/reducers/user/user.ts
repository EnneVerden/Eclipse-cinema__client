import { IUser, TUserAction } from "@tsTypes/user";
import { FETCH_USER } from "@constants/users";

type TInitialState = IUser | {};

const initialState: TInitialState = {};

const user = (
  state: TInitialState = initialState,
  action: TUserAction
): TInitialState => {
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    default:
      return state;
  }
};

export default user;
