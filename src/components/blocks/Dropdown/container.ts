import Dropdown from "./component";
import { Dispatch } from "redux";
import logout from "actions/logout";
import { connect, ConnectedProps } from "react-redux";
import { getUser } from "selectors/user";
import { TRootState } from "reducers";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(Dropdown);
