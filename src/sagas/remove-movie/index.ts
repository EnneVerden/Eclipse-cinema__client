import setAlert from "actions/set-alert";
import setRemoveMovieToState from "actions/set-remove-movie";
import { call, put, take } from "redux-saga/effects";
import { REMOVE_MOVIE } from "constants/movies";
import { TRemoveMovieWorker, TRemoveMovieWatcher } from "./types";

export const removeMovieRequest = (
  movieIdToDelete: string
): Promise<Response> => {
  return fetch(
    `https://eclipse-cinema-server.herokuapp.com/movies/${movieIdToDelete}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );
};

export function* removeMovieWorker(
  removeMovieRequest: any,
  movieIdToDelete: string
): TRemoveMovieWorker {
  try {
    const response = yield call(removeMovieRequest, movieIdToDelete);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.deletedMovieId) {
      yield put(setRemoveMovieToState(data.deletedMovieId));
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* removeMovie(): TRemoveMovieWatcher {
  while (true) {
    const { movieIdToDelete } = yield take(REMOVE_MOVIE);

    yield call(removeMovieWorker, removeMovieRequest, movieIdToDelete);
  }
}
