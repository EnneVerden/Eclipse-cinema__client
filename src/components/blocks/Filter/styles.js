import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l2,
  font_gilroy,
  color_white,
  color_dark_l3,
} from "theme/variables";

const styles = makeStyles({
  filter: {
    backgroundColor: color_dark_l2,
    boxShadow: `0 0 10px 3px ${color_dark_l3}`,
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    padding: "20px 0",
    display: "flex",
  },
  title: {
    color: color_white,
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "2.2rem",
    letterSpacing: "1px",
  },
});

export default styles;
