import { expectSaga, testSaga } from "redux-saga-test-plan";
import { moviesTestData } from "utils/movies";
import { buyMovie, buyMovieRequest, buyMovieWorker } from ".";
import setBoughtMovieToState from "actions/set-bought-movie";
import setAlert from "actions/set-alert";
import { BUY_MOVIE } from "constants/user";
import { getMovieResponse, getErrorResponse, errorMessage } from "utils/user";

describe("BuyMovie Saga", () => {
  const movieId = "1";

  describe("Worker", () => {
    it("With valid movie id data", () => {
      expectSaga(buyMovieWorker, getMovieResponse, movieId)
        .put(setBoughtMovieToState(moviesTestData.movies[0]))
        .run();
    });

    it("With error", () => {
      expectSaga(buyMovieWorker, getErrorResponse, movieId)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(buyMovie)
        .next()
        .take(BUY_MOVIE)
        .next({ movieId })
        .call(buyMovieWorker, buyMovieRequest, movieId);
    });
  });
});
