import InfoPanel from "./component";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUserAvatar } from "selectors/user";
import replenishBalance from "actions/replenish-balance";
import changeUserInfo from "actions/change-user-info";

const mapStateToProps = (state: TRootState) => ({
  avatar: getUserAvatar(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  replenishBalance: () => dispatch(replenishBalance()),
  changeUserAvatar: (userInfo: any) =>
    dispatch(changeUserInfo({ ...userInfo })),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(InfoPanel);
