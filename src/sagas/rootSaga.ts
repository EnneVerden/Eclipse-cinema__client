import { all, AllEffect, CallEffect, TakeEffect } from "redux-saga/effects";

import { authorization } from "./authorization";
import { login } from "./login";
import { registration } from "./registration";
import { logout } from "./logout";

export default function* rootSaga(): Generator<
  AllEffect<Generator<TakeEffect | CallEffect>>
> {
  yield all([login(), registration(), authorization(), logout()]);
}
