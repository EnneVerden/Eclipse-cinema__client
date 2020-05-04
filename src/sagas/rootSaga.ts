import { all, AllEffect, CallEffect, TakeEffect } from "redux-saga/effects";

import login from "./auth/login";
import registration from "./auth/registration";

export default function* rootSaga(): Generator<
  AllEffect<Generator<TakeEffect | CallEffect>>
> {
  yield all([login(), registration()]);
}
