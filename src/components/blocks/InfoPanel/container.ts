import InfoPanel from "./component";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const connector = connect(mapStateToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(InfoPanel);