import { makeStyles } from "@material-ui/core/styles";
import { font_gilroy, color_white } from "theme/variables";

const styles = makeStyles({
  dropdown: {
    position: "relative",
    zIndex: 1,
  },
  menuLink: {
    textDecoration: "none",
  },
  menuText: {
    fontFamily: `${font_gilroy}, sans-serif`,
    color: color_white,
    letterSpacing: "1px",
    marginLeft: "7px",
  },
});

export default styles;
