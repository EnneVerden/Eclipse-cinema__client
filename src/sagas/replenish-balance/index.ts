import { TReplenishBalanceWorker, TReplenishBalanceWatcher } from "types/user";
import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import setBalanceToState from "actions/set-balance";
import { REPLENISH_BALANCE } from "constants/user";

export const replenishBalanceRequest = (): Promise<Response> => {
  return fetch("https://eclipse-cinema-deploy.herokuapp.com/users/replenish", {
    method: "PATCH",
    credentials: "include",
  });
};

export function* replenishBalanceWorker(
  replenishBalanceRequest: any
): TReplenishBalanceWorker {
  try {
    const response = yield call(replenishBalanceRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.balance) {
      yield put(setBalanceToState(data.balance));
    }
  } catch {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* replenishBalance(): TReplenishBalanceWatcher {
  while (true) {
    yield take(REPLENISH_BALANCE);

    yield call(replenishBalanceWorker, replenishBalanceRequest);
  }
}
