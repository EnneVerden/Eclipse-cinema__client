import moviesReducer from ".";
import {
  SET_MOVIES_TO_STATE,
  SET_NEW_MOVIE_TO_STATE,
  SET_REMOVE_MOVIE_TO_STATE,
} from "constants/movies";
import { moviesTestData } from "utils/movies";

describe("Movies reducer", () => {
  it("Should return state with movies data if receiving type", () => {
    const state = moviesReducer(undefined, {
      type: SET_MOVIES_TO_STATE,
      movies: moviesTestData,
    });

    expect(state).toEqual(moviesTestData);
  });

  it("Should return state with new movie if receiving type", () => {
    const initialMovies = moviesTestData.movies.filter(
      (movie) => movie._id !== "1"
    );
    const initalState = {
      movies: initialMovies,
      pageCount: moviesTestData.pageCount,
    };

    const exectedState = {
      movies: [...initialMovies, moviesTestData.movies[0]],
      pageCount: moviesTestData.pageCount,
    };

    const state = moviesReducer(initalState, {
      type: SET_NEW_MOVIE_TO_STATE,
      movie: moviesTestData.movies[0],
    });

    expect(state).toEqual(exectedState);
  });

  it("Should return state without movie if receiving type", () => {
    const initialState = moviesTestData;
    const expectedData = {
      ...moviesTestData,
      movies: moviesTestData.movies.filter((movie) => movie._id !== "1"),
    };

    const state = moviesReducer(initialState, {
      type: SET_REMOVE_MOVIE_TO_STATE,
      deletedMovieId: "1",
    });

    expect(state).toEqual(expectedData);
  });
});
