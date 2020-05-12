import tagsReducer from ".";
import { SET_TAGS_TO_STATE } from "constants/tags";
import { tagsTestData } from "utils/tags";

describe("Tags reducer", () => {
  it("Should return state with tags data if receiving type", () => {
    const state = tagsReducer(undefined, {
      type: SET_TAGS_TO_STATE,
      tags: tagsTestData,
    });

    expect(state).toEqual(tagsTestData);
  });
});
