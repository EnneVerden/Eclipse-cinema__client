import { expectSaga, testSaga } from "redux-saga-test-plan";
import { login, loginWorker, loginRequest } from ".";
import { userTestData } from "utils/user";
import setUserToState from "actions/set-user";
import setAlert from "actions/set-alert";
import { LOGIN } from "constants/authorization";
import { getUserResponse, getErrorResponse, errorMessage } from "utils/auth";

describe("Login Saga", () => {
  const email = "test@gmail.com";
  const password = "1234567";

  describe("Worker", () => {
    it("With valid user data", () => {
      expectSaga(loginWorker, getUserResponse, email, password)
        .put(setUserToState(userTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(loginWorker, getErrorResponse, email, password)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(login)
        .next()
        .take(LOGIN)
        .next({ email, password })
        .call(loginWorker, loginRequest, email, password);
    });
  });
});
