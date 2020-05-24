import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l2, shadow_color } from "theme/variables";

const styles = makeStyles({
  panel: {
    position: "relative",
    zIndex: 1,
    backgroundColor: color_dark_l2,
    boxShadow: `0 0 10px 3px ${shadow_color}`,
    display: "flex",
    justifyContent: "center",
    overflow: "auto",
  },
});

export default styles;
