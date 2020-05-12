import { take, call, put } from "redux-saga/effects";
import { LOGOUT } from "constants/authorization";
import {
  TAuthWatcherGenerator,
  TAuthWorkerGenerator,
} from "types/authorization";
import setAlert from "actions/set-alert";
import clearUserState from "actions/clear-user";

export const logoutRequest = (): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/logout", {
    credentials: "include",
  });
};

export function* logoutWorker(logoutRequest: any): TAuthWorkerGenerator {
  try {
    const response = yield call(logoutRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.auth.name === "Logout") {
      yield put(clearUserState());
      yield put(setAlert({ type: "success", message: data.auth.message }));
    }
  } catch {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* logout(): TAuthWatcherGenerator {
  yield take(LOGOUT);

  yield call(logoutWorker, logoutRequest);
}
