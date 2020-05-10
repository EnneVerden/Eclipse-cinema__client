import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l2,
  color_dark_l3,
  font_gilroy,
  color_metallic,
  color_red,
} from "theme/variables";

const styles = makeStyles({
  footer: {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: color_dark_l2,
    boxShadow: `0 0 10px 3px ${color_dark_l3}`,
  },
  wrapper: {
    height: "100%",
    display: "flex",
    alignItems: "center",

    "@media(max-width: 600px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "initial",
    },
  },
  text: {
    fontFamily: `${font_gilroy}, sans-serif`,
    color: color_metallic,
    letterSpacing: "1px",
    fontSize: "0.9rem",

    "@media(max-width: 600px)": {
      margin: "5px 0",
    },
  },
  link: {
    color: color_red,
    textDecoration: "none",
  },
});

export default styles;
