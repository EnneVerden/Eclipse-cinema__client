import InfoPanel from "./component";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";
import replenishBalance from "actions/replenish-balance";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  replenishBalance: () => dispatch(replenishBalance()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(InfoPanel);
