import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l3, color_pink, color_red } from "theme/variables";

const styles = makeStyles({
  header: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    backgroundColor: color_dark_l3,
    boxShadow: `0 0px 10px 5px #1e1c1e`,

    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "-2px",
      background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
      zIndex: "100",
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  padding: {
    padding: "14px 0",
  },
});

export default styles;
