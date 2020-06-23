import { makeStyles } from "@material-ui/core/styles";
import { font_gilroy, color_white } from "theme/variables";

const styles = makeStyles({
  wrapper: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: color_white,
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "2.2rem",
    letterSpacing: "1px",
  },
});

export default styles;
