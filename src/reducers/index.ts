import { combineReducers } from "redux";

import user from "./user/user";

const rootReducer = combineReducers({ user });

type TRootReducer = typeof rootReducer;
export type TAppState = ReturnType<TRootReducer>;

export default rootReducer;
