import Dropdown from "./component";
import { Dispatch } from "redux";
import logout from "actions/logout";
import { connect, ConnectedProps } from "react-redux";
import { getUserAvatar, getUserFullName, getUserBalance } from "selectors/user";
import { TRootState } from "reducers";

const mapStateToProps = (state: TRootState) => ({
  avatar: getUserAvatar(state),
  fullName: getUserFullName(state),
  balance: getUserBalance(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(Dropdown);
