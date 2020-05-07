import { all, AllEffect, CallEffect, TakeEffect } from "redux-saga/effects";

import { login } from "./login/login";
import { registration } from "./registration/registration";

export default function* rootSaga(): Generator<
  AllEffect<Generator<TakeEffect | CallEffect>>
> {
  yield all([login(), registration()]);
}
