import Header from "./component";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import authorization from "actions/authorization";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  authorization: () => dispatch(authorization()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(Header);
