import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l1 } from "theme/variables";

const styles = makeStyles({
  grid: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: color_dark_l1,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default styles;
