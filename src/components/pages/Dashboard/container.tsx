import DashboardPage from "./component";
import fetchMovies from "actions/fetch-movies";
import fetchUsers from "actions/fetch-users";
import fetchOrders from "actions/fetch-orders";
import removeMovie from "actions/remove-movie";
import removeUsers from "actions/remove-users";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getMovies } from "selectors/movies";
import { getUsers } from "selectors/users";
import { getOrders } from "selectors/orders";

const mapStateToProps = (state: TRootState) => ({
  movies: getMovies(state),
  users: getUsers(state),
  orders: getOrders(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMovies: (page: string) => dispatch(fetchMovies(page)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchOrders: () => dispatch(fetchOrders()),
  removeMovie: (movieIdToDelete: string) =>
    dispatch(removeMovie(movieIdToDelete)),
  removeUsers: () => dispatch(removeUsers()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
