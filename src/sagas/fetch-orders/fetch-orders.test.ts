import { expectSaga, testSaga } from "redux-saga-test-plan";
import { fetchOrdersWorker, fetchOrders, fetchOrdersRequest } from ".";
import { orderTestData } from "utils/orders";
import setOrdersToState from "actions/set-orders";
import { getErrorResponse, errorMessage } from "utils/auth";
import setAlert from "actions/set-alert";
import { FETCH_ORDERS } from "constants/orders";

describe("FetchOrders Saga", () => {
  describe("Worker", () => {
    it("With valid orders data", () => {
      expectSaga(fetchOrdersWorker, fetchOrdersRequest)
        .put(setOrdersToState([orderTestData]))
        .run();
    });

    it("With error", () => {
      expectSaga(fetchOrdersWorker, getErrorResponse)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(fetchOrders)
        .next()
        .take(FETCH_ORDERS)
        .next()
        .call(fetchOrdersWorker, fetchOrdersRequest);
    });
  });
});
