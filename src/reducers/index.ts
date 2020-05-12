import { combineReducers } from "redux";

import user from "./user";
import alert from "./alert";
import tags from "./tags";
import movies from "./movies";

const rootReducer = combineReducers({ user, alert, tags, movies });

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
