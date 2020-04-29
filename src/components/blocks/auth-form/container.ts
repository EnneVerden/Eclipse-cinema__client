import { login } from "@actions/login/login";
import { registration } from "@actions/registration/registration";
import { connect } from "react-redux";
import AuthForm from "./component";
import { TAppState } from "@reducers";
import { ThunkDispatch } from "redux-thunk";
import { IUserFetchAction } from "@tsTypes/fetchUser";

type TDispatch = ThunkDispatch<TAppState, unknown, IUserFetchAction>;

export interface IMapDispatchToProps {
  login: (email: string, password: string) => void;
  registration: (fullName: string, email: string, password: string) => void;
}

const mapDispatchToProps = (dispatch: TDispatch): IMapDispatchToProps => ({
  login: (email, password) => dispatch(login(email, password)),
  registration: (fullName, email, password) =>
    dispatch(registration(fullName, email, password)),
});

export default connect(undefined, mapDispatchToProps)(AuthForm);
