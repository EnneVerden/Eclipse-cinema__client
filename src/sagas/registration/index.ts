import setAlert from "actions/set-alert";
import setUserToState from "actions/set-user";
import { call, put, take } from "redux-saga/effects";
import { REGISTRATION } from "constants/authorization";
import {
  TAuthWorkerGenerator,
  TAuthWatcherGenerator,
} from "types/authorization";

export const registrationRequest = (
  fullName: string,
  email: string,
  password: string
): Promise<Response> => {
  return fetch("https://eclipse-cinema-deploy.herokuapp.com/registration", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      fullName,
      email,
      password,
    }),
    credentials: "include",
  });
};

export function* registrationWorker(
  registrationRequest: any,
  fullName: string,
  email: string,
  password: string
): TAuthWorkerGenerator {
  try {
    const response = yield call(registrationRequest, fullName, email, password);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.auth) {
      yield put(setUserToState(data.auth.user));
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* registration(): TAuthWatcherGenerator {
  while (true) {
    const { fullName, email, password } = yield take(REGISTRATION);

    yield call(
      registrationWorker,
      registrationRequest,
      fullName,
      email,
      password
    );
  }
}
