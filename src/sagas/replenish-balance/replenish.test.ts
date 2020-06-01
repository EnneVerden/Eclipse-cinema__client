import { expectSaga, testSaga } from "redux-saga-test-plan";
import {
  replenishBalance,
  replenishBalanceRequest,
  replenishBalanceWorker,
} from ".";
import setBalanceToState from "actions/set-balance";
import { balanceTestData } from "utils/user";
import { getErrorResponse, errorMessage } from "utils/auth";
import setAlert from "actions/set-alert";
import { REPLENISH_BALANCE } from "constants/user";

describe("ReplenishBalance saga", () => {
  describe("Worker", () => {
    it("With valid balance data", () => {
      expectSaga(replenishBalanceWorker, replenishBalanceRequest)
        .put(setBalanceToState(balanceTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(replenishBalanceWorker, getErrorResponse)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(replenishBalance)
        .next()
        .take(REPLENISH_BALANCE)
        .next()
        .call(replenishBalanceWorker, replenishBalanceRequest);
    });
  });
});
