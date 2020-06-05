import { expectSaga, testSaga } from "redux-saga-test-plan";
import { removeUsers, removeUsersWorker, removeUsersRequest } from ".";
import setRemoveUsersToState from "actions/set-remove-users";
import setAlert from "actions/set-alert";
import { REMOVE_USERS } from "constants/users";
import {
  getRemoveUsersResponse,
  getErrorResponse,
  errorMessage,
} from "utils/users";

describe("RemoveUsers Saga", () => {
  const deletedUsersId = ["1"];

  describe("Worker", () => {
    it("With valid users id data", () => {
      expectSaga(removeUsersWorker, getRemoveUsersResponse)
        .put(setRemoveUsersToState(deletedUsersId))
        .run();
    });

    it("With error", () => {
      expectSaga(removeUsersWorker, getErrorResponse)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(removeUsers)
        .next()
        .take(REMOVE_USERS)
        .next()
        .call(removeUsersWorker, removeUsersRequest);
    });
  });
});
