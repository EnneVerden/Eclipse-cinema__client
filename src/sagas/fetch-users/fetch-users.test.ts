import { expectSaga, testSaga } from "redux-saga-test-plan";
import { fetchUsersWorker, fetchUsers, fetchUsersRequest } from ".";
import { userTestData } from "utils/user";
import { fetchUsersResponse } from "utils/users";
import setUsersToState from "actions/set-users";
import { getErrorResponse, errorMessage } from "utils/auth";
import setAlert from "actions/set-alert";
import { FETCH_USERS } from "constants/users";

describe("FetchUsers Saga", () => {
  describe("Worker", () => {
    it("With valid users data", () => {
      expectSaga(fetchUsersWorker, fetchUsersResponse)
        .put(setUsersToState([userTestData]))
        .run();
    });

    it("With error", () => {
      expectSaga(fetchUsersWorker, getErrorResponse)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(fetchUsers)
        .next()
        .take(FETCH_USERS)
        .next()
        .call(fetchUsersWorker, fetchUsersRequest);
    });
  });
});
