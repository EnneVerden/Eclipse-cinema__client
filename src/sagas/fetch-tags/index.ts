import { TFetchTagsWorker, TFetchTagsWatcher } from "types/tags";
import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import setTagsToState from "actions/set-tags";
import { FETCH_TAGS } from "constants/tags";

export const fetchTagsRequest = (): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/tags", {
    credentials: "include",
  });
};

export function* fetchTagsWorker(fetchTagsRequest: any): TFetchTagsWorker {
  try {
    const response = yield call(fetchTagsRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.tags) {
      yield put(setTagsToState(data.tags));
    }
  } catch {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* fetchTags(): TFetchTagsWatcher {
  yield take(FETCH_TAGS);

  yield call(fetchTagsWorker, fetchTagsRequest);
}
