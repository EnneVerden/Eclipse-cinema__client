import { expectSaga, testSaga } from "redux-saga-test-plan";
import { removeAccount, removeAccountWorker, removeAccountRequest } from ".";
import setRemoveAccountToState from "actions/set-remove-account";
import setAlert from "actions/set-alert";
import { REMOVE_ACCOUNT } from "constants/user";
import {
  getAccountStatusResponse,
  getErrorResponse,
  errorMessage,
} from "utils/user";

describe("RemoveAccount Saga", () => {
  describe("Worker", () => {
    it("With valid account remove data", () => {
      expectSaga(removeAccountWorker, getAccountStatusResponse)
        .put(setRemoveAccountToState("deletion"))
        .run();
    });

    it("With error", () => {
      expectSaga(removeAccountWorker, getErrorResponse)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(removeAccount)
        .next()
        .take(REMOVE_ACCOUNT)
        .next()
        .call(removeAccountWorker, removeAccountRequest);
    });
  });
});
