import ProfilePage from "./component";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import removeTicket from "actions/remove-ticket";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeTicket: (deletedMovieId: string) =>
    dispatch(removeTicket(deletedMovieId)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
