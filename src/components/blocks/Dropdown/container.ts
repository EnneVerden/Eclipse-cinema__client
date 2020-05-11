import Dropdown from "./component";
import { Dispatch } from "redux";
import { logout } from "actions/auth";
import { connect, ConnectedProps } from "react-redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector> & {
  handleToggle: () => void;
  isVisible: boolean;
};

export default connector(Dropdown);
