import Header from "./component";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import { connect } from "react-redux";

const MapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const connector = connect(MapStateToProps);

export default connector(Header);
