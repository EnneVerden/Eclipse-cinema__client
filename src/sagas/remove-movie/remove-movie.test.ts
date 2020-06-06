import { expectSaga, testSaga } from "redux-saga-test-plan";
import { moviesTestData } from "utils/movies";
import { removeMovie, removeMovieWorker, removeMovieRequest } from ".";
import setRemoveMovieToState from "actions/set-remove-movie";
import setAlert from "actions/set-alert";
import { REMOVE_MOVIE } from "constants/movies";
import {
  fetchRemoveMovieResponse,
  getErrorResponse,
  errorMessage,
} from "utils/movies";

describe("RemoveMovie Saga", () => {
  const movieIdToDelete = "1";

  describe("Worker", () => {
    it("With valid movie id data", () => {
      expectSaga(removeMovieWorker, fetchRemoveMovieResponse, movieIdToDelete)
        .put(setRemoveMovieToState("1"))
        .run();
    });

    it("With error", () => {
      expectSaga(removeMovieWorker, getErrorResponse, movieIdToDelete)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(removeMovie)
        .next()
        .take(REMOVE_MOVIE)
        .next({ movieIdToDelete })
        .call(removeMovieWorker, removeMovieRequest, movieIdToDelete);
    });
  });
});
