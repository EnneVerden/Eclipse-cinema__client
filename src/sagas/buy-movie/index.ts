import setAlert from "actions/set-alert";
import setBoughtMovieToState from "actions/set-bought-movie";
import { call, put, take } from "redux-saga/effects";
import { BUY_MOVIE } from "constants/user";
import { TBuyMovieWorker, TBuyMovieWatcher } from "./types";

export const buyMovieRequest = (movieId: string): Promise<Response> => {
  return fetch("https://eclipse-cinema-deploy.herokuapp.com/users", {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      movieId,
    }),
    credentials: "include",
  });
};

export function* buyMovieWorker(
  buyMovieRequest: any,
  movieId: string
): TBuyMovieWorker {
  try {
    const response = yield call(buyMovieRequest, movieId);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.userInfo) {
      yield put(setBoughtMovieToState(data.userInfo));
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* buyMovie(): TBuyMovieWatcher {
  while (true) {
    const { movieId } = yield take(BUY_MOVIE);

    yield call(buyMovieWorker, buyMovieRequest, movieId);
  }
}
