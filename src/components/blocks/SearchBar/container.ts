import SearchBar from "./component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import searchMovie from "actions/search-movie";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchMovie: (movieName: string) => dispatch(searchMovie(movieName)),
});

export const connector = connect(undefined, mapDispatchToProps);

export default connector(SearchBar);
