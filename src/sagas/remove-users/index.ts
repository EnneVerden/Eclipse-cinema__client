import setAlert from "actions/set-alert";
import setRemoveUsersToState from "actions/set-remove-users";
import { call, put, take } from "redux-saga/effects";
import { REMOVE_USERS } from "constants/users";
import { TRemoveUsersWorker, TRemoveUsersWatcher } from "./types";

export const removeUsersRequest = (): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/users/all", {
    method: "DELETE",
    credentials: "include",
  });
};

export function* removeUsersWorker(
  removeUsersRequest: any
): TRemoveUsersWorker {
  try {
    const response = yield call(removeUsersRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.deletedUsersId) {
      yield put(setRemoveUsersToState(data.deletedUsersId));
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* removeUsers(): TRemoveUsersWatcher {
  while (true) {
    yield take(REMOVE_USERS);

    yield call(removeUsersWorker, removeUsersRequest);
  }
}
