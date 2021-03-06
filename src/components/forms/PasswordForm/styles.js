import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l2,
  shadow_color,
  font_gilroy,
  color_white,
  color_metallic,
  color_red,
} from "theme/variables";

const styles = makeStyles({
  form: {
    width: "43%",
    padding: "25px",
    backgroundColor: color_dark_l2,
    boxShadow: `0 0 10px 1px ${shadow_color}`,

    "@media(max-width: 1024px)": {
      width: "95%",
      margin: "15px 0",
    },
    "@media(max-width: 768px)": {
      width: "93%",
    },
    "@media(max-width: 600px)": {
      width: "85%",
      marginBottom: "50px",
    },
    "@media(max-width: 320px)": {
      width: "84%",
    },
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "1.3rem",
    color: color_white,
    letterSpacing: "1px",
  },
  input: {
    width: "47%",
    borderColor: color_metallic,

    "& label": {
      color: color_metallic,
      fontWeight: 300,

      "&.Mui-focused": {
        color: color_red,
      },
    },

    "& .MuiOutlinedInput-root": {
      color: color_metallic,

      "& fieldset": {
        borderColor: color_metallic,
      },
      "&:hover fieldset": {
        borderColor: color_red,
      },
      "&.Mui-focused fieldset": {
        borderColor: color_red,
      },
    },

    "@media(max-width: 600px)": {
      margin: "10px 0",
      width: "100%",
    },
  },
  newPassword: {
    paddingTop: "35px",
    display: "flex",
    justifyContent: "space-between",

    "@media(max-width: 600px)": {
      paddingTop: "25px",
      flexDirection: "column",
    },
  },
  oldPassword: {
    padding: "25px 0",

    "@media(max-width: 600px)": {
      padding: 0,
      marginBottom: "10px",
    },
  },
  button: {
    borderColor: color_red,
    color: color_red,
  },
});

export default styles;
