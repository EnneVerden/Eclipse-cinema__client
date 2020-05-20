import { TRootState } from "reducers";
import { getMovies } from "selectors/movies";
import { connect, ConnectedProps } from "react-redux";
import Pagination from "./component";
import { IMoviesData } from "types/movies";
import { Dispatch } from "redux";
import fetchMovies from "actions/fetch-movies";

interface IMapStateToProps {
  movies: IMoviesData;
}

const mapStateToProps = (state: TRootState): IMapStateToProps => ({
  movies: getMovies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMovies: (page?: string, tag?: string) =>
    dispatch(fetchMovies(page, tag)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector> & IMapStateToProps;

export default connector(Pagination);
