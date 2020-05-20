import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l1, font_gilroy, color_metallic } from "theme/variables";

const styles = makeStyles({
  grid: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: color_dark_l1,
    height: "70vh",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  warningWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "200px",
  },
  warning: {
    fontFamily: `${font_gilroy}, sans-serif`,
    color: color_metallic,
    fontSize: "2rem",
    letterSpacing: "1px",
  },
});

export default styles;
