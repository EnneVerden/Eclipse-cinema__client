import { expectSaga, testSaga } from "redux-saga-test-plan";
import { newUserInfoTestData } from "utils/user";
import {
  changeMovieInfo,
  changeMovieInfoWorker,
  changeMovieInfoRequest,
} from ".";
import setNewMovieInfoToState from "actions/set-new-movie-info";
import setAlert from "actions/set-alert";
import { UPDATE_MOVIE } from "constants/movies";
import {
  moviesTestData,
  newMovieInfo as info,
  getErrorResponse,
  errorMessage,
} from "utils/movies";

describe("ChangeMovieInfo Saga", () => {
  const _id = "1";
  const newMovieInfo = Object.assign(moviesTestData.movies[0], info);

  describe("Worker", () => {
    it("With valid new movie info", () => {
      expectSaga(
        changeMovieInfoWorker,
        changeMovieInfoRequest,
        _id,
        newMovieInfo
      )
        .put(setNewMovieInfoToState(newMovieInfo))
        .run();
    });

    it("With error", () => {
      expectSaga(changeMovieInfoWorker, getErrorResponse, _id, newMovieInfo)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(changeMovieInfo)
        .next()
        .take(UPDATE_MOVIE)
        .next({ _id, newMovieInfo })
        .call(changeMovieInfoWorker, changeMovieInfoRequest, _id, newMovieInfo);
    });
  });
});
