import { TFetchOrdersWorker, TFetchOrdersWatcher } from "types/orders";
import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import setOrdersToState from "actions/set-orders";
import { FETCH_ORDERS } from "constants/orders";

export const fetchOrdersRequest = (): Promise<Response> => {
  return fetch("https://eclipse-cinema-deploy.herokuapp.com/users/orders", {
    credentials: "include",
  });
};

export function* fetchOrdersWorker(
  fetchOrdersRequest: any
): TFetchOrdersWorker {
  try {
    const response = yield call(fetchOrdersRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.orders) {
      yield put(setOrdersToState(data.orders));
    }
  } catch {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* fetchOrders(): TFetchOrdersWatcher {
  yield take(FETCH_ORDERS);

  yield call(fetchOrdersWorker, fetchOrdersRequest);
}
