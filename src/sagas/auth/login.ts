import { call, put, take } from "redux-saga/effects";
import setError from "actions/set-error/set-error";
import { setUserToState } from "actions/auth";
import { LOGIN } from "constants/users";

const loginRequest = (email: string, password: string): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

function* loginWorker(email: string, password: string) {
  try {
    const response = yield call(loginRequest, email, password);
    const data = yield response.json();

    if (data !== undefined && data.error) {
      yield put(setError({ type: "error", message: data.error.message }));
    }

    if (data !== undefined && data.auth) {
      yield put(setUserToState(data.auth.user));
    }
  } catch (error) {
    yield put(
      setError({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export default function* login() {
  const { email, password } = yield take(LOGIN);

  yield call(loginWorker, email, password);
}
