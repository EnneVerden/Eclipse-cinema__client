import setError from "actions/set-error/set-error";
import { setUserToState } from "actions/auth";
import { call, put, take } from "redux-saga/effects";
import { REGISTRATION } from "constants/users";

const registrationRequest = (
  fullName: string,
  email: string,
  password: string
): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/registration", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      fullName,
      email,
      password,
    }),
  });
};

function* registrationWorker(
  fullName: string,
  email: string,
  password: string
) {
  try {
    const response = yield call(registrationRequest, fullName, email, password);
    const data = yield response.json();

    if (data.error) {
      yield put(setError({ type: "error", message: data.error.message }));
    } else {
      yield put(setUserToState(data.auth.user));
    }
  } catch (error) {
    yield put(
      setError({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export default function* registration() {
  const { fullName, email, password } = yield take(REGISTRATION);

  yield call(registrationWorker, fullName, email, password);
}
