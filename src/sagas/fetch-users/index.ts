import { TFetchUsersWorker, TFetchUsersWatcher } from "types/users";
import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import setUsersToState from "actions/set-users";
import { FETCH_USERS } from "constants/users";

export const fetchUsersRequest = (): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/users", {
    credentials: "include",
  });
};

export function* fetchUsersWorker(fetchUsersRequest: any): TFetchUsersWorker {
  try {
    const response = yield call(fetchUsersRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.users) {
      yield put(setUsersToState(data.users));
    }
  } catch {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* fetchUsers(): TFetchUsersWatcher {
  yield take(FETCH_USERS);

  yield call(fetchUsersWorker, fetchUsersRequest);
}
