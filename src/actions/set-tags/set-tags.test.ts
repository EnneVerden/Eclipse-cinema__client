import { ISetTagsToStateAction } from "types/tags";
import { SET_TAGS_TO_STATE } from "constants/tags";
import setTagsToState from ".";
import { tagsTestData } from "utils/tags";

describe("SetTags action creator", () => {
  it("Should create an action to set tags", () => {
    const expectedAction: ISetTagsToStateAction = {
      type: SET_TAGS_TO_STATE,
      tags: tagsTestData,
    };

    expect(setTagsToState(tagsTestData)).toEqual(expectedAction);
  });
});
