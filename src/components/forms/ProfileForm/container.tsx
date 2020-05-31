import ProfileForm from "./component";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAlert } from "types/alert";
import setAlert from "actions/set-alert";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAlert: (alert: IAlert) => dispatch(setAlert(alert)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(ProfileForm);
