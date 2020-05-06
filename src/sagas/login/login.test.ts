import { expectSaga, testSaga } from "redux-saga-test-plan";
import { login, loginWorker, loginRequest } from "./login";
import { userTestData } from "utils/user";
import { setUserToState } from "actions/auth";
import setError from "actions/set-error/set-error";
import { LOGIN } from "constants/users";

describe("Login Saga", () => {
  const email = "test@gmail.com";
  const password = "1234567";

  describe("Worker", () => {
    it("With valid user data", () => {
      const getResponse = () => {
        const json = JSON.stringify({ auth: { user: userTestData } });

        return new Response(json, { status: 201 });
      };

      expectSaga(loginWorker, getResponse, email, password)
        .put(setUserToState(userTestData))
        .run();
    });

    it("With error", () => {
      const errorMessage = "Test error";

      const getResponse = () => {
        const json = JSON.stringify({ error: { message: errorMessage } });

        return new Response(json, { status: 404 });
      };

      expectSaga(loginWorker, getResponse, email, password)
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
