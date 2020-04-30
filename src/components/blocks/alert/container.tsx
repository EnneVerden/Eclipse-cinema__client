import { connect, ConnectedProps } from "react-redux";
import Alert from "./component";
import { getError } from "selectors/error";
import { TRootState } from "reducers";

const mapStateToProps = (state: TRootState) => ({
  error: getError(state),
});

const connector = connect(mapStateToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(Alert);
