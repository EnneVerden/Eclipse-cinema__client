import { expectSaga, testSaga } from "redux-saga-test-plan";
import { userTestData } from "utils/user";
import { registrationWorker, registration, registrationRequest } from ".";
import setUserToState from "actions/set-user";
import setError from "actions/set-error";
import { REGISTRATION } from "constants/authorization";
import { getUserResponse, getErrorResponse, errorMessage } from "utils/auth";

describe("Registration Saga", () => {
  const fullName = "test";
  const email = "test@gmail.com";
  const password = "1234567";

  describe("Worker", () => {
    it("With valid user data", () => {
      expectSaga(registrationWorker, getUserResponse, fullName, email, password)
        .put(setUserToState(userTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(
        registrationWorker,
        getErrorResponse,
        fullName,
        email,
        password
      )
        .put(setError({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(registration)
        .next()
        .take(REGISTRATION)
        .next({ fullName, email, password })
        .call(
          registrationWorker,
          registrationRequest,
          fullName,
          email,
          password
        );
    });
  });
});
