import { expectSaga, testSaga } from "redux-saga-test-plan";
import { moviesTestData } from "utils/movies";
import { removeTicket, removeTicketWorker, removeTicketRequest } from ".";
import removeTicketFromState from "actions/remove-state-ticket";
import setAlert from "actions/set-alert";
import { REMOVE_TICKET } from "constants/user";
import { getMovieResponse, getErrorResponse, errorMessage } from "utils/user";

describe("RemoveTicket Saga", () => {
  const deletedMovieId = "1";

  describe("Worker", () => {
    it("With valid movie id data", () => {
      expectSaga(removeTicketWorker, getMovieResponse, deletedMovieId)
        .put(removeTicketFromState(moviesTestData.movies[0]))
        .run();
    });

    it("With error", () => {
      expectSaga(removeTicketWorker, getErrorResponse, deletedMovieId)
        .put(setAlert({ type: "error", message: errorMessage }))
        .run();
    });
  });

  describe("Watcher", () => {
    it("Should complete without error", () => {
      testSaga(removeTicket)
        .next()
        .take(REMOVE_TICKET)
        .next({ deletedMovieId })
        .call(removeTicketWorker, removeTicketRequest, deletedMovieId);
    });
  });
});
