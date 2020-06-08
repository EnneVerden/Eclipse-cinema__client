import { IAddMovieAction } from "./types";
import { ADD_MOVIE } from "constants/movies";
import { moviesTestData } from "utils/movies";
import addMovie from ".";

describe("AddMovie action creator", () => {
  it("Should create an action to add movie", () => {
    const testData = {
      poster: "Test poster uri",
      movieName: "Test name",
      description: "Test description",
      tags: ["1", "2", "3"],
      startDate: "2020-12-20",
      endDate: "2020-12-20",
      ticketPrice: 10,
    };

    const expectedAction: IAddMovieAction = {
      type: ADD_MOVIE,
      movie: testData,
    };

    expect(addMovie(testData)).toEqual(expectedAction);
  });
});
