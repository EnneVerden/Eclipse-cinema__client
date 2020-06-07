import { expectSaga, testSaga } from "redux-saga-test-plan";
import { moviesTestData } from "utils/movies";
import { addNewMovie, addNewMovieWorker, addNewMovieRequest } from ".";
import setNewMovieToState from "actions/set-movie";
import setAlert from "actions/set-alert";
import { ADD_MOVIE } from "constants/movies";
import { getMovieResponse, getErrorResponse, errorMessage } from "utils/user";

describe("AddNewMovie Saga", () => {
  const movie = moviesTestData.movies[0];

  describe("Worker", () => {
    it("With valid movie data", () => {
      expectSaga(addNewMovieWorker, getMovieResponse, movie)
        .put(setNewMovieToState(moviesTestData.movies[0]))
        .run();
    });

    it("With error", () => {
      expectSaga(addNewMovieWorker, getErrorResponse, movie)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(addNewMovie)
        .next()
        .take(ADD_MOVIE)
        .next({ movie })
        .call(addNewMovieWorker, addNewMovieRequest, movie);
    });
  });
});
