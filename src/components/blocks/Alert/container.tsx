import { connect, ConnectedProps } from "react-redux";
import Alert from "./component";
import { getAlert } from "selectors/alert";
import { TRootState } from "reducers";

const mapStateToProps = (state: TRootState) => ({
  alert: getAlert(state),
});

const connector = connect(mapStateToProps);

export type TProps = ConnectedProps<typeof connector>;

export default connector(Alert);
