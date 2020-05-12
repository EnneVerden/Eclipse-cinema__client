import { expectSaga, testSaga } from "redux-saga-test-plan";
import { authRequest, authWorker, authorization } from ".";
import { userTestData } from "utils/user";
import setUserToState from "actions/set-user";
import setError from "actions/set-error";
import { AUTHORIZATION } from "constants/authorization";
import { getUserResponse, getErrorResponse, errorMessage } from "utils/auth";

describe("Authorization Saga", () => {
  describe("Worker", () => {
    it("With valid user data", () => {
      expectSaga(authWorker, getUserResponse)
        .put(setUserToState(userTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(authWorker, getErrorResponse)
        .put(setError({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(authorization)
        .next()
        .take(AUTHORIZATION)
        .next()
        .call(authWorker, authRequest);
    });
  });
});
