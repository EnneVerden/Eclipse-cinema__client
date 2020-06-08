import setAlert from "actions/set-alert";
import setNewMovieToState from "actions/set-movie";
import { call, put, take } from "redux-saga/effects";
import { ADD_MOVIE } from "constants/movies";
import { TAddNewMovieWorker, TAddNewMovieWatcher } from "./types";
import { IMovie, ICustomMovie } from "types/movies";

export const addNewMovieRequest = (movie: ICustomMovie) => {
  const formData = new FormData();

  formData.append("poster", movie.poster.files[0]);
  formData.append("movieName", movie.movieName);
  formData.append("description", movie.description);
  formData.append("tags", JSON.stringify(movie.tags));
  formData.append("startDate", movie.startDate);
  formData.append("endDate", movie.endDate);
  formData.append("ticketPrice", movie.ticketPrice.toString());

  return fetch("https://eclipse-cinema-deploy.herokuapp.com/movies", {
    method: "POST",
    body: formData,
    credentials: "include",
  });
};

export function* addNewMovieWorker(
  addNewMovieRequest: any,
  movie: IMovie
): TAddNewMovieWorker {
  try {
    const response = yield call(addNewMovieRequest, movie);
    const data = yield response.json();

    if (data.error) {
      yield put(setAlert({ type: "error", message: data.error.message }));
    }

    if (data.movie) {
      yield put(setNewMovieToState(data.movie));
      yield put(
        setAlert({ type: "success", message: "Movie added successfully" })
      );
    }
  } catch (error) {
    yield put(
      setAlert({ type: "error", message: "Something wrong! Try again later." })
    );
  }
}

export function* addNewMovie(): TAddNewMovieWatcher {
  while (true) {
    const { movie } = yield take(ADD_MOVIE);

    yield call(addNewMovieWorker, addNewMovieRequest, movie);
  }
}
