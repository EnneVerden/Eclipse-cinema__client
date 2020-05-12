import { TFetchMoviesWorker, TFetchMoviesWatcher } from "types/movies";
import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import { FETCH_MOVIES } from "constants/movies";
import setMoviesToState from "actions/set-movies";

export const fetchMoviesRequest = (): Promise<Response> => {
  return fetch("https://eclipse-cinema-server.herokuapp.com/movies", {
    credentials: "include",
  });
};

export function* fetchMoviesWorker(
  fetchMoviesRequest: any
): TFetchMoviesWorker {
  try {
    const response = yield call(fetchMoviesRequest);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.movies) {
      yield put(setMoviesToState(data.movies));
    }
  } catch {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* fetchMovies(): TFetchMoviesWatcher {
  yield take(FETCH_MOVIES);

  yield call(fetchMoviesWorker, fetchMoviesRequest);
}
