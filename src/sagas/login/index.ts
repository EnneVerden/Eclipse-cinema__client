import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import setUserToState from "actions/set-user";
import { LOGIN } from "constants/authorization";
import {
  TAuthWorkerGenerator,
  TAuthWatcherGenerator,
} from "types/authorization";

export const loginRequest = (
  email: string,
  password: string
): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: "include",
  });
};

export function* loginWorker(
  loginRequest: any,
  email: string,
  password: string
): TAuthWorkerGenerator {
  try {
    const response = yield call(loginRequest, email, password);
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

export function* login(): TAuthWatcherGenerator {
  while (true) {
    const { email, password } = yield take(LOGIN);

    yield call(loginWorker, loginRequest, email, password);
  }
}
