import Grid from "./component";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import { Dispatch } from "redux";
import buyMovie from "actions/buy-movie";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  buyMovie: (movieId: string) => dispatch(buyMovie(movieId)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
