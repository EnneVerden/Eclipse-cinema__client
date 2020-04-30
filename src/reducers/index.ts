import { combineReducers } from "redux";

import user from "./user/user";
import error from "./error/error";

const rootReducer = combineReducers({ user, error });

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
