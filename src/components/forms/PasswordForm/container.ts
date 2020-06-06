import PasswordForm from "./component";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAlert } from "types/alert";
import setAlert from "actions/set-alert";
import changeUserInfo from "actions/change-user-info";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAlert: (alert: IAlert) => dispatch(setAlert(alert)),
  changeUserPassword: (newPassword: string, oldPassword: string) =>
    dispatch(changeUserInfo({ newPassword, oldPassword })),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(PasswordForm);
