import { login, ILoginSuccess } from "@actions/login/login";
import { connect } from "react-redux";
import AuthForm from "./component";
import { TAppState } from "@reducers";
import { ThunkDispatch } from "redux-thunk";

type TDispatch = ThunkDispatch<TAppState, unknown, ILoginSuccess>;

export interface IMapDispatchToProps {
  login: (email: string, password: string) => void;
}

const mapDispatchToProps = (dispatch: TDispatch): IMapDispatchToProps => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(undefined, mapDispatchToProps)(AuthForm);
