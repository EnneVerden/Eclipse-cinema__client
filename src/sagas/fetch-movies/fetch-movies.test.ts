import { expectSaga, testSaga } from "redux-saga-test-plan";
import { fetchMoviesWorker, fetchMoviesRequest, fetchMovies } from ".";
import setMoviesToState from "actions/set-movies";
import { moviesTestData } from "utils/movies";
import { getErrorResponse, errorMessage } from "utils/auth";
import setAlert from "actions/set-alert";
import { FETCH_MOVIES } from "constants/movies";

describe("FetchMovies saga", () => {
  describe("Worker", () => {
    it("With valid movies data", () => {
      expectSaga(fetchMoviesWorker, fetchMoviesRequest)
        .put(setMoviesToState(moviesTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(fetchMoviesWorker, getErrorResponse)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    const page = 1;
    const tag = "action";

    it("Should complete without error", () => {
      testSaga(fetchMovies)
        .next()
        .take(FETCH_MOVIES)
        .next({ page, tag })
        .call(fetchMoviesWorker, fetchMoviesRequest, page, tag);
    });
  });
});
