import { expectSaga, testSaga } from "redux-saga-test-plan";
import { logoutRequest, logoutWorker, logout } from ".";
import { userTestData } from "utils/user";
import setUserToState from "actions/set-user";
import setAlert from "actions/set-alert";
import { LOGOUT } from "constants/authorization";
import { getLogoutResponse, getErrorResponse, errorMessage } from "utils/auth";

describe("Logout Saga", () => {
  describe("Worker", () => {
    it("Should complete success", () => {
      expectSaga(logoutWorker, getLogoutResponse)
        .put(setUserToState(userTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(logoutWorker, getErrorResponse)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(logout)
        .next()
        .take(LOGOUT)
        .next()
        .call(logoutWorker, logoutRequest);
    });
  });
});
