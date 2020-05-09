import { connect, ConnectedProps } from "react-redux";
import AuthForm from "./component";
import { IError } from "types/error";
import setError from "actions/set-error/set-error";
import { login, registration } from "actions/auth";
import { Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
  registration: (fullName: string, email: string, password: string) =>
    dispatch(registration(fullName, email, password)),
  setError: (error: IError) => dispatch(setError(error)),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector> & {
  changeFormKind: () => void;
  isLoginForm: boolean;
};

export default connector(AuthForm);
