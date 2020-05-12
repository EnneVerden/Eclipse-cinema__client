import { combineReducers } from "redux";

import user from "./user";
import alert from "./alert";
import tags from "./tags";

const rootReducer = combineReducers({ user, alert, tags });

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
