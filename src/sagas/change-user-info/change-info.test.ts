import { expectSaga, testSaga } from "redux-saga-test-plan";
import { newUserInfoTestData } from "utils/user";
import { changeUserInfo, changeUserInfoWorker, changeUserInfoRequest } from ".";
import setNewUserInfoToState from "actions/set-new-user-info";
import setAlert from "actions/set-alert";
import { CHANGE_USER_INFO } from "constants/user";
import { getErrorResponse, errorMessage } from "utils/user";

describe("ChangeUserInfo Saga", () => {
  const userInfoToChange = {
    email: "test@gmail.com",
    fullName: "test name",
    oldPassword: "1",
  };

  describe("Worker", () => {
    it("With valid new user info", () => {
      expectSaga(changeUserInfoWorker, changeUserInfoRequest, userInfoToChange)
        .put(setNewUserInfoToState(newUserInfoTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(changeUserInfoWorker, getErrorResponse, userInfoToChange)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(changeUserInfo)
        .next()
        .take(CHANGE_USER_INFO)
        .next({ userInfoToChange })
        .call(changeUserInfoWorker, changeUserInfoRequest, userInfoToChange);
    });
  });
});
