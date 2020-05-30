import { makeStyles } from "@material-ui/core/styles";
import { font_gilroy, color_metallic } from "theme/variables";

const styles = makeStyles({
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
