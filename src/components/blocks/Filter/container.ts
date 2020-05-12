import Filter from "./component";
import { Dispatch } from "redux";
import fetchTags from "actions/fetch-tags";
import { connect, ConnectedProps } from "react-redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(Filter);
