import { ITag, ISetTagsToStateAction } from "types/tags";
import { SET_TAGS_TO_STATE } from "constants/tags";

type TState = Array<ITag> | [];

const initialState: TState = [];

const tags = (state = initialState, action: ISetTagsToStateAction): TState => {
  switch (action.type) {
    case SET_TAGS_TO_STATE:
      return action.tags;
    default:
      return state;
  }
};

export default tags;
