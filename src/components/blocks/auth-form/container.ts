import { login } from "actions/login/login";
import { registration } from "actions/registration/registration";
import { connect, ConnectedProps } from "react-redux";
import AuthForm from "./component";
import { TRootState } from "reducers";
import { ThunkDispatch } from "redux-thunk";
import { IError } from "types/error";
import setError from "actions/set-error/set-error";
import { TUserAction } from "types/user";

type TDispatch = ThunkDispatch<TRootState, unknown, TUserAction>;

const mapDispatchToProps = (dispatch: TDispatch) => ({
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
