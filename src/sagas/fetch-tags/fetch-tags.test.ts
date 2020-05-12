import { expectSaga, testSaga } from "redux-saga-test-plan";
import { fetchTagsWorker, fetchTags, fetchTagsRequest } from ".";
import { fetchTagsResponse, tagsTestData } from "utils/tags";
import setTagsToState from "actions/set-tags";
import { getErrorResponse, errorMessage } from "utils/auth";
import setAlert from "actions/set-alert";
import { FETCH_TAGS } from "constants/tags";

describe("FetchTags Saga", () => {
  describe("Worker", () => {
    it("With valid tags data", () => {
      expectSaga(fetchTagsWorker, fetchTagsResponse)
        .put(setTagsToState(tagsTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(fetchTagsWorker, getErrorResponse)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(fetchTags)
        .next()
        .take(FETCH_TAGS)
        .next()
        .call(fetchTagsWorker, fetchTagsRequest);
    });
  });
});
