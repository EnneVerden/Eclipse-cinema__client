import { TSearchMovieWorker, TSearchMovieWatcher } from "./types";
import { call, put, take } from "redux-saga/effects";
import setAlert from "actions/set-alert";
import { SEARCH_MOVIE } from "constants/movies";
import setMoviesToState from "actions/set-movies";

export const searchMovieRequest = (movieName: string): Promise<Response> => {
  const query = movieName.replace(" ", "$20");

  return fetch(
    `https://eclipse-cinema-server.herokuapp.com/movies?movieName=${query}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
};

export function* searchMovieWorker(
  searchMovieRequest: any,
  movieName: string
): TSearchMovieWorker {
  try {
    const response = yield call(searchMovieRequest, movieName);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data) {
      yield put(setMoviesToState(data));
    }
  } catch (error) {
    console.log(error);
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* searchMovie(): TSearchMovieWatcher {
  while (true) {
    const { movieName } = yield take(SEARCH_MOVIE);

    yield call(searchMovieWorker, searchMovieRequest, movieName);
  }
}
