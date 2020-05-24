import { makeStyles } from "@material-ui/core/styles";
import { font_gilroy, color_white, shadow_color } from "theme/variables";

const styles = makeStyles({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    border: "none",
    padding: "15px 10px",
  },
  active: {
    boxShadow: `0 0 10px 1px ${shadow_color}`,
  },
  avatar: {
    width: "55px",
    height: "55px",
    padding: "0 6px",
    borderRadius: "50%",
  },
  info: {
    height: "55px",
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    fontFamily: `${font_gilroy}, sans-serif`,
    color: color_white,
    letterSpacing: "1px",
    fontSize: "1.1rem",

    "@media(max-width: 600px)": {
      fontSize: "1rem",
    },
  },
  balance: {
    display: "flex",
    fontFamily: `${font_gilroy}, sans-serif`,
    color: color_white,
    letterSpacing: "1px",
    fontSize: "0.9rem",

    "@media(max-width: 360px)": {
      fontSize: "0.8rem",
    },
  },
  icon: {
    "@media(max-width: 359px)": {
      display: "none",
    },
  },
});

export default styles;
