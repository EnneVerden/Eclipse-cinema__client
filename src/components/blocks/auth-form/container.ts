import { login } from "actions/login/login";
import { registration } from "actions/registration/registration";
import { connect, ConnectedProps } from "react-redux";
import AuthForm from "./component";
import { TRootState } from "reducers";
import { ThunkDispatch } from "redux-thunk";
import { IUserFetchAction } from "types/fetchUser";

type TDispatch = ThunkDispatch<TRootState, unknown, IUserFetchAction>;

const mapDispatchToProps = (dispatch: TDispatch) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
  registration: (fullName: string, email: string, password: string) =>
    dispatch(registration(fullName, email, password)),
});

const connector = connect(undefined, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector> & {
  changeFormKind: () => void;
  isLoginForm: boolean;
};

export default connector(AuthForm);
