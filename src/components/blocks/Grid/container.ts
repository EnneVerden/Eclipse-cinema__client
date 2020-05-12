import Grid from "./component";
import fetchMovies from "actions/fetch-movies";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { TRootState } from "reducers";
import { getMovies } from "selectors/movies";
import { IMovie } from "types/movies";

interface IMapStateToProps {
  movies: Array<IMovie>;
}

const mapStateToProps = (state: TRootState) => ({
  movies: getMovies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector> & IMapStateToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
