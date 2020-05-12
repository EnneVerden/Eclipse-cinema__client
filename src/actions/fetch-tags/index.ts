import { IFetchTagsAction } from "types/tags";
import { FETCH_TAGS } from "constants/tags";

const fetchTags = (): IFetchTagsAction => ({
  type: FETCH_TAGS,
});

export default fetchTags;
