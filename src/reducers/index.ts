import { combineReducers } from "redux";

import user from "./user";
import alert from "./alert";
import tags from "./tags";
import movies from "./movies";

import { IUser } from "types/user";
import { IAlert } from "types/alert";
import { ITag } from "types/tags";
import { IMoviesData } from "types/movies";

const rootReducer = combineReducers({ user, alert, tags, movies });

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

export type TRootState = IUserReducer &
  IAlertReducer &
  ITagsReducer &
  IMoviesReducer;

export default rootReducer;
