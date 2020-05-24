import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l3, shadow_color } from "theme/variables";

const styles = makeStyles({
  list: {
    position: "absolute",
    top: "100%",
    left: "0",
    background: color_dark_l3,
    width: "100%",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px",
    boxShadow: `0 0 10px 1px ${shadow_color}`,
  },
  hidden: {
    display: "none",
  },
});

export default styles;
