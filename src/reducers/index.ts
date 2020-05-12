import { combineReducers } from "redux";

import user from "./user";
import alert from "./alert";

const rootReducer = combineReducers({ user, alert });

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
