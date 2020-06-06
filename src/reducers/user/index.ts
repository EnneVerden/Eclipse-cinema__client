import { TUserAction, IUser } from "types/user";
import { SET_USER_TO_STATE, CLEAR_USER_STATE } from "constants/authorization";
import {
  SET_BALANCE_TO_STATE,
  SET_BOUGHT_MOVIE_TO_STATE,
  REMOVE_TICKET_FROM_STATE,
  SET_NEW_USER_INFO_TO_STATE,
} from "constants/user";

type TState = IUser & {};

const initialState: TState = {};

const user = (state = initialState, action: TUserAction): TState => {
  switch (action.type) {
    case SET_USER_TO_STATE:
      return action.user;
    case SET_BALANCE_TO_STATE:
      return { ...state, balance: action.balance.balance };
    case SET_BOUGHT_MOVIE_TO_STATE:
      return {
        ...state,
        tickets: state.tickets ? [...state.tickets, action.movie] : [],
        balance: state.balance ? state.balance - action.movie.ticketPrice : 0,
      };
    case SET_NEW_USER_INFO_TO_STATE:
      if (action.newUserInfo.fullName) {
        return { ...state, fullName: action.newUserInfo.fullName };
      } else if (action.newUserInfo.email) {
        return { ...state, email: action.newUserInfo.email };
      } else if (action.newUserInfo.email && action.newUserInfo.fullName) {
        return {
          ...state,
          fullName: action.newUserInfo.fullName,
          email: action.newUserInfo.email,
        };
      }

      return state;
    case REMOVE_TICKET_FROM_STATE:
      return {
        ...state,
        tickets: state.tickets?.filter(
          (ticket) => ticket._id !== action.movie._id
        ),
      };
    case CLEAR_USER_STATE:
      return initialState;
    default:
      return state;
  }
};

export default user;
