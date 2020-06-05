import { IBuyMovieAction } from "types/user";
import { BUY_MOVIE } from "constants/user";
import buyMovie from ".";

describe("BuyMovie action creator", () => {
  it("Should create an action to buy movie", () => {
    const testData = "1";

    const expectedAction: IBuyMovieAction = {
      type: BUY_MOVIE,
      movieId: testData,
    };

    expect(buyMovie(testData)).toEqual(expectedAction);
  });
});
