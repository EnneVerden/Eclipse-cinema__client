import { expectSaga, testSaga } from "redux-saga-test-plan";
import { login, loginWorker, loginRequest } from "./login";
import { userTestData } from "utils/user";
import { setUserToState } from "actions/auth";
import setError from "actions/set-error/set-error";
import { LOGIN } from "constants/users";
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
        .put(setError({ type: "error", message: errorMessage }))
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