import setAlert from "actions/set-alert";
import removeTicketFromState from "actions/remove-state-ticket";
import { call, put, take } from "redux-saga/effects";
import { REMOVE_TICKET } from "constants/user";
import { TRemoveTicketWorker, TRemoveTicketWatcher } from "./types";

export const removeTicketRequest = (
  deletedMovieId: string
): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/users", {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      deletedMovieId,
    }),
    credentials: "include",
  });
};

export function* removeTicketWorker(
  removeTicketRequest: any,
  deletedMovieId: string
): TRemoveTicketWorker {
  try {
    const response = yield call(removeTicketRequest, deletedMovieId);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.userInfo) {
      yield put(removeTicketFromState(data.userInfo));
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* removeTicket(): TRemoveTicketWatcher {
  while (true) {
    const { deletedMovieId } = yield take(REMOVE_TICKET);

    yield call(removeTicketWorker, removeTicketRequest, deletedMovieId);
  }
}
