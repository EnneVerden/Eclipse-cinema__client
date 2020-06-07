import MovieForm from "./component";
import { TRootState } from "reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAlert } from "types/alert";
import setAlert from "actions/set-alert";
import { getTags } from "selectors/tags";
import fetchTags from "actions/fetch-tags";
import addMovie from "actions/add-movie";
import { IMovieCustom } from "./types";

const mapStateToProps = (state: TRootState) => ({
  tags: getTags(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAlert: (alert: IAlert) => dispatch(setAlert(alert)),
  fetchTags: () => dispatch(fetchTags()),
  addMovie: (movie: IMovieCustom) => dispatch(addMovie(movie)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(MovieForm);
