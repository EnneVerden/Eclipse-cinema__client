import { expectSaga, testSaga } from "redux-saga-test-plan";
import { searchMovie, searchMovieWorker, searchMovieRequest } from ".";
import setMoviesToState from "actions/set-movies";
import { moviesTestData } from "utils/movies";
import { getErrorResponse, errorMessage } from "utils/auth";
import setAlert from "actions/set-alert";
import { SEARCH_MOVIE } from "constants/movies";

describe("SearchMovie saga", () => {
  const movieName = "Blade runner 2049";

  describe("Worker", () => {
    it("With valid search data", () => {
      expectSaga(searchMovieWorker, searchMovieRequest, movieName)
        .put(setMoviesToState(moviesTestData))
        .run();
    });

    it("With error", () => {
      expectSaga(searchMovieWorker, getErrorResponse, movieName)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(searchMovie)
        .next()
        .take(SEARCH_MOVIE)
        .next({ movieName })
        .call(searchMovieWorker, searchMovieRequest, movieName);
    });
  });
});
