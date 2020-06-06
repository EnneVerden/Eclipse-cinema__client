import ProfileForm from "./component";
import { TRootState } from "reducers";
import { getUserFullName, getUserEmail } from "selectors/user";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAlert } from "types/alert";
import setAlert from "actions/set-alert";
import changeUserInfo from "actions/change-user-info";

const mapStateToProps = (state: TRootState) => ({
  fullName: getUserFullName(state),
  email: getUserEmail(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAlert: (alert: IAlert) => dispatch(setAlert(alert)),
  changeUserInfo: (oldPassword: string, userInfo: any) =>
    dispatch(changeUserInfo({ oldPassword, ...userInfo })),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(ProfileForm);
