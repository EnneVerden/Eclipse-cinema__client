import ProfilePage from "./component";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
