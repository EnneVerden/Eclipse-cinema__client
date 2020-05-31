import SideMenu from "./component";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import authorization from "actions/authorization";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  authorization: () => dispatch(authorization()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
