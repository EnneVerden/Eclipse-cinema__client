import ProfilePage from "./component";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
