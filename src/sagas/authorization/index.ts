import {
  TAuthWorkerGenerator,
  TAuthWatcherGenerator,
} from "types/authorization";
import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import setUserToState from "actions/set-user";
import { AUTHORIZATION } from "constants/authorization";

export const authRequest = (): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/", {
    credentials: "include",
  });
};

export function* authWorker(authRequest: any): TAuthWorkerGenerator {
  try {
    const response = yield call(authRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.auth) {
      yield put(setUserToState(data.auth.user));
    }
  } catch {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* authorization(): TAuthWatcherGenerator {
  yield take(AUTHORIZATION);

  yield call(authWorker, authRequest);
}
