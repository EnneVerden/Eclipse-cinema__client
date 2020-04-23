import { IUser } from "@tsTypes/user";
import { FETCH_USER } from "@constants/users";

type TInitialState = IUser | {};

const initialState: TInitialState = {};

const user = (
  state: TInitialState = initialState,
  action: any
): TInitialState => {
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    default:
      return state;
  }
};

export default user;
