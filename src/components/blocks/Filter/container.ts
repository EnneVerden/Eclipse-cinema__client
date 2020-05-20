import Filter from "./component";
import { Dispatch } from "redux";
import fetchTags from "actions/fetch-tags";
import { connect, ConnectedProps } from "react-redux";
import { TRootState } from "reducers";
import { getTags } from "selectors/tags";
import { ITag } from "types/tags";
import fetchMovies from "actions/fetch-movies";
import { getMovies } from "selectors/movies";
import { IMoviesData } from "types/movies";

interface IMap {
  tags: Array<ITag>;
  movies: IMoviesData;
}

const mapStateToProps = (state: TRootState) => ({
  tags: getTags(state),
  movies: getMovies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchMovies: (page?: string, tag?: string) =>
    dispatch(fetchMovies(page, tag)),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector> & IMap;

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
