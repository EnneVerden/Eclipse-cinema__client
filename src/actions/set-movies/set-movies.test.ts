import { ISetMoviesToStateAction } from "types/movies";
import { SET_MOVIES_TO_STATE } from "constants/movies";
import { moviesTestData } from "utils/movies";
import setMoviesToState from ".";

describe("FetchMovies action", () => {
  it("Should create an action to set movies", () => {
    const expectedAction: ISetMoviesToStateAction = {
      type: SET_MOVIES_TO_STATE,
      movies: moviesTestData,
    };

    expect(setMoviesToState(moviesTestData)).toEqual(expectedAction);
  });
});
