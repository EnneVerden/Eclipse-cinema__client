import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import ProtectedRoute from "./component";

const MapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const connector = connect(MapStateToProps);

export default connector(ProtectedRoute);
