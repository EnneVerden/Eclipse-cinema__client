import InfoPanel from "./component";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUserAvatar, getUserAccountStatus } from "selectors/user";
import replenishBalance from "actions/replenish-balance";
import changeUserInfo from "actions/change-user-info";
import removeAccount from "actions/remove-account";

const mapStateToProps = (state: TRootState) => ({
  avatar: getUserAvatar(state),
  accountStatus: getUserAccountStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  replenishBalance: () => dispatch(replenishBalance()),
  changeUserAvatar: (userInfo: any) =>
    dispatch(changeUserInfo({ ...userInfo })),
  removeAccount: () => dispatch(removeAccount()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(InfoPanel);
