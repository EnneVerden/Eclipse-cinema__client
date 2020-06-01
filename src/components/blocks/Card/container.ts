import Grid from "./component";
import { connect } from "react-redux";
import { TRootState } from "reducers";
import { getUser } from "selectors/user";

const mapStateToProps = (state: TRootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = () => ({});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
