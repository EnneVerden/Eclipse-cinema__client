import setAlert from "actions/set-alert";
import setRemoveAccountToState from "actions/set-remove-account";
import { call, put, take } from "redux-saga/effects";
import { REMOVE_ACCOUNT } from "constants/user";
import { TRemoveAccontWorker, TRemoveAccountWatcher } from "./types";

export const removeAccountRequest = (): Promise<Response> => {
  return fetch(`https://eclipse-cinema-deploy.herokuapp.com/users`, {
    method: "DELETE",
    credentials: "include",
  });
};

export function* removeAccountWorker(
  removeAccountRequest: any
): TRemoveAccontWorker {
  try {
    const response = yield call(removeAccountRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.status) {
      yield put(setRemoveAccountToState(data.status.accountStatus));
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* removeAccount(): TRemoveAccountWatcher {
  while (true) {
    yield take(REMOVE_ACCOUNT);

    yield call(removeAccountWorker, removeAccountRequest);
  }
}
