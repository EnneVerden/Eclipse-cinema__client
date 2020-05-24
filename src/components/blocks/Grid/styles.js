import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l1, font_gilroy, color_metallic } from "theme/variables";

const styles = makeStyles({
  grid: {
    minHeight: "100vh",
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
  warningWrapper: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  warning: {
    fontFamily: `${font_gilroy}, sans-serif`,
    color: color_metallic,
    fontSize: "2rem",
    letterSpacing: "1px",
  },
});

export default styles;
