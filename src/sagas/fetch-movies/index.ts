import { TFetchMoviesWorker, TFetchMoviesWatcher } from "types/movies";
import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import { FETCH_MOVIES } from "constants/movies";
import setMoviesToState from "actions/set-movies";

export const fetchMoviesRequest = (page?: number): Promise<Response> => {
  return fetch(
    `https://eclipse-cinema-server.herokuapp.com/movies?page=${page}`,
    {
      credentials: "include",
    }
  );
};

export function* fetchMoviesWorker(
  fetchMoviesRequest: any,
  page?: number
): TFetchMoviesWorker {
  try {
    const response = yield call(fetchMoviesRequest, page);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.movies) {
      yield put(
        setMoviesToState({
          movies: data.movies,
          pagesCount: data.pagesCount,
        })
      );
    }
  } catch {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* fetchMovies(): TFetchMoviesWatcher {
  while (true) {
    const { page = 1 } = yield take(FETCH_MOVIES);

    yield call(fetchMoviesWorker, fetchMoviesRequest, page);
  }
}
