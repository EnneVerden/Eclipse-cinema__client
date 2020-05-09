import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l2 } from "theme/variables";

const styles = makeStyles({
  list: {
    position: "absolute",
    top: "100%",
    left: "0",
    background: color_dark_l2,
    width: "100%",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px",
  },
  hidden: {
    display: "none",
  },
});

export default styles;
