import { connect, ConnectedProps } from "react-redux";
import AuthForm from "./component";
import { IAlert } from "types/alert";
import setAlert from "actions/set-alert";
import login from "actions/login";
import registration from "actions/registration";
import { Dispatch } from "redux";
import authorization from "actions/authorization";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  authorization: () => dispatch(authorization()),
  login: (email: string, password: string) => dispatch(login(email, password)),
  registration: (fullName: string, email: string, password: string) =>
    dispatch(registration(fullName, email, password)),
  setAlert: (alert: IAlert) => dispatch(setAlert(alert)),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector> & {
  changeFormKind: () => void;
  isLoginForm: boolean;
};

export default connector(AuthForm);
