import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l1,
  color_white,
  font_gilroy,
  color_dark_l3,
} from "theme/variables";

const styles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: color_dark_l1,
    boxShadow: `0 0px 10px 3px ${color_dark_l3}`,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  padding: {
    padding: "14px 0",
  },
  dropdown: {
    position: "relative",
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
