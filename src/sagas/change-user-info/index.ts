import setAlert from "actions/set-alert";
import setNewUserInfoToState from "actions/set-new-user-info";
import { call, put, take } from "redux-saga/effects";
import { CHANGE_USER_INFO } from "constants/user";
import { TChangeUserInfoWorker, TChangeUserInfoWatcher } from "./types";
import { IUserInfoToChange } from "types/user";

export const changeUserInfoRequest = (
  userInfoToChange: IUserInfoToChange
): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/users", {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userInfoToChange),
    credentials: "include",
  });
};

export function* changeUserInfoWorker(
  changeUserInfoRequest: any,
  userInfoToChange: IUserInfoToChange
): TChangeUserInfoWorker {
  try {
    const response = yield call(changeUserInfoRequest, userInfoToChange);
    const data = yield response.json();

    if (data.error) {
      return yield put(
        setAlert({ type: "error", message: data.error.message })
      );
    }

    if (data.userInfo.password) {
      yield put(
        setAlert({ type: "success", message: "Password changed successfully" })
      );
    }

    if (data.userInfo) {
      yield put(setNewUserInfoToState(data.userInfo));
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* changeUserInfo(): TChangeUserInfoWatcher {
  while (true) {
    const { userInfoToChange } = yield take(CHANGE_USER_INFO);

    yield call(changeUserInfoWorker, changeUserInfoRequest, userInfoToChange);
  }
}
