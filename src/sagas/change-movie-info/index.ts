import setAlert from "actions/set-alert";
import setNewMovieInfoToState from "actions/set-new-movie-info";
import { call, put, take } from "redux-saga/effects";
import { UPDATE_MOVIE } from "constants/movies";
import { TChangeMovieInfoWorker, TChangeMovieInfoWatcher } from "./types";
import { INewMovieInfo } from "types/movies";

export const changeMovieInfoRequest = (
  _id: string,
  newMovieInfo: INewMovieInfo
): Promise<Response> => {
  if (newMovieInfo.poster) {
    const formData = new FormData();

    formData.append("poster", newMovieInfo.poster.files[0]);

    return fetch(`https://eclipse-cinema-server.herokuapp.com/movies/${_id}`, {
      method: "PATCH",
      body: formData,
      credentials: "include",
    });
  } else {
    console.log(newMovieInfo);
    return fetch(`https://eclipse-cinema-server.herokuapp.com/movies/${_id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newMovieInfo),
      credentials: "include",
    });
  }
};

export function* changeMovieInfoWorker(
  changeMovieInfoRequest: any,
  _id: string,
  newMovieInfo: INewMovieInfo
): TChangeMovieInfoWorker {
  try {
    const response = yield call(changeMovieInfoRequest, _id, newMovieInfo);
    const data = yield response.json();

    if (data.error) {
      return yield put(
        setAlert({ type: "error", message: data.error.message })
      );
    }

    if (data.movie) {
      yield put(setNewMovieInfoToState(data.movie));
      return yield put(
        setAlert({
          type: "success",
          message: "Movie information changed successfully",
        })
      );
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* changeMovieInfo(): TChangeMovieInfoWatcher {
  while (true) {
    const { _id, newMovieInfo } = yield take(UPDATE_MOVIE);

    yield call(
      changeMovieInfoWorker,
      changeMovieInfoRequest,
      _id,
      newMovieInfo
    );
  }
}
