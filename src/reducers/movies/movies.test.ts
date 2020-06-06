import moviesReducer from ".";
import {
  SET_MOVIES_TO_STATE,
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
