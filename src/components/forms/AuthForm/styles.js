import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l1,
  color_red,
  color_white,
  font_information,
} from "theme/variables";

const styles = makeStyles({
  form: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: color_dark_l1,
    padding: "15px 20px",
    boxShadow: `0 0 10px 3px #222024`,
  },
  form_signIn: {
    width: "420px",
    height: "355px",
    transition: "height 0.3s",

    "@media(max-width: 600px)": {
      width: "90%",
    },
  },
  form_signUp: {
    width: "420px",
    height: "475px",
    transition: "height 0.5s",

    "@media(max-width: 600px)": {
      width: "90%",
    },
  },
  input: {
    margin: "10px 0",

    "& label": {
      color: color_white,
      fontWeight: 300,

      "&.Mui-focused": {
        color: color_red,
      },
    },

    "& .MuiOutlinedInput-root": {
      color: color_white,

      "& fieldset": {
        borderColor: color_white,
      },
      "&:hover fieldset": {
        borderColor: color_red,
      },
      "&.Mui-focused fieldset": {
        borderColor: color_red,
      },
    },
  },
  hide: {
    display: "none",
    transition: "opacity 0.4s",
  },
  show: {
    display: "inherit",
  },
  animation: {
    opacity: 1,
  },
  btn: {
    color: color_red,
    borderColor: color_red,
    margin: "20px 0",
  },
  moveBtn: {
    transform: "translateY(120px)",
    transition: "transform 0.5s",
  },
  moveInput: {
    transform: "translateY(60px)",
    transition: "transform 0.5s",
  },
  cancelMoveBtn: {
    transform: "translateY(0)",
    transition: "transform 0s",
  },
  cancelMoveInput: {
    transform: "translateY(0)",
    transition: "transform 0s",
  },
  changer: {
    fontFamily: `${font_information}, sans-serif`,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  changerTitle: {
    color: color_white,
  },
  changerLink: {
    color: color_red,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
  },
  move: {
    transform: "translateY(120px)",
    transition: "transform 0.5s",
  },
  cancelMove: {
    transform: "translateY(0)",
    transition: "transform 0s",
  },
  logo: {
    // marginBottom: "20px",
  },
});

export default styles;
