import { IFetchTagsAction } from "types/tags";
import { FETCH_TAGS } from "constants/tags";
import fetchTags from ".";

describe("FetchTags action creator", () => {
  it("Should create an action to fetch tags", () => {
    const expectedAction: IFetchTagsAction = {
      type: FETCH_TAGS,
    };

    expect(fetchTags()).toEqual(expectedAction);
  });
});
