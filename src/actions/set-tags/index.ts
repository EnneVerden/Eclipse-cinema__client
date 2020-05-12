import { ISetTagsToStateAction, ITag } from "types/tags";
import { SET_TAGS_TO_STATE } from "constants/tags";

const setTagsToState = (tags: Array<ITag>): ISetTagsToStateAction => ({
  type: SET_TAGS_TO_STATE,
  tags,
});

export default setTagsToState;
