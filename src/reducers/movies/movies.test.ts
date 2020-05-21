import moviesReducer from ".";
import { SET_MOVIES_TO_STATE } from "constants/movies";
import { moviesTestData } from "utils/movies";

describe("Movies reducer", () => {
  it("Should return state with movies data if receiving type", () => {
    const state = moviesReducer(undefined, {
      type: SET_MOVIES_TO_STATE,
      movies: moviesTestData,
    });

    expect(state).toEqual(moviesTestData);
  });
});
