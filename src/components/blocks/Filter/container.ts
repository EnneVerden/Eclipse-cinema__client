import Filter from "./component";
import { Dispatch } from "redux";
import fetchTags from "actions/fetch-tags";
import { connect, ConnectedProps } from "react-redux";
import { TRootState } from "reducers";
import { getTags } from "selectors/tags";
import fetchMovies from "actions/fetch-movies";
import { getMovies } from "selectors/movies";

const mapStateToProps = (state: TRootState) => ({
  tags: getTags(state),
  movies: getMovies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchMovies: (page?: string, tag?: string) =>
    dispatch(fetchMovies(page, tag)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
