import Filter from "./component";
import { Dispatch } from "redux";
import fetchTags from "actions/fetch-tags";
import { connect, ConnectedProps } from "react-redux";
import { TRootState } from "reducers";
import { getTags } from "selectors/tags";
import { ITag } from "types/tags";

interface IMap {
  tags: Array<ITag>;
}

const mapStateToProps = (state: TRootState) => ({
  tags: getTags(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector> & IMap;

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
