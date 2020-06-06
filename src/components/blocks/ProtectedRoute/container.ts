import ProtectedRoute from "./component";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import { Dispatch } from "redux";
import authorization from "actions/authorization";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  authorization: () => dispatch(authorization()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ProtectedRoute);
