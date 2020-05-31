import { combineReducers } from "redux";

import user from "./user";
import alert from "./alert";
import tags from "./tags";
import movies from "./movies";
import users from "./users";
import orders from "./orders";

import { IUser } from "types/user";
import { IAlert } from "types/alert";
import { ITag } from "types/tags";
import { IMoviesData } from "types/movies";
import { IOrder } from "types/orders";

const rootReducer = combineReducers({
  user,
  alert,
  tags,
  movies,
  users,
  orders,
});

interface IUserReducer {
  user: IUser;
}
interface IAlertReducer {
  alert: IAlert;
}
interface ITagsReducer {
  tags: Array<ITag>;
}
interface IMoviesReducer {
  movies: IMoviesData;
}
interface IUsersReducer {
  users: Array<IUser>;
}
interface IOrdersReducer {
  orders: Array<IOrder>;
}

export type TRootState = IUserReducer &
  IAlertReducer &
  ITagsReducer &
  IMoviesReducer &
  IUsersReducer &
  IOrdersReducer;

export default rootReducer;
