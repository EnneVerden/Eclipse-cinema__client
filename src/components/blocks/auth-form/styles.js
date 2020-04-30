import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l2, color_red, color_white } from "theme/variables";

const styles = makeStyles({
  form: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "rgba(38, 38, 43, 0.9)",
    padding: "15px 20px",
    boxShadow: `0 0 3px 1px ${color_dark_l2}`,

    "@media(max-width: 600px) and (max-height: 340px)": {
      padding: "10px 20px",
    },
  },
  form_signIn: {
    width: "420px",
    height: "270px",
    transition: "height 0.3s",

    "@media(max-width: 600px)": {
      width: "90%",
    },
    "@media(max-width: 960px) and (max-height: 440px)": {
      height: "235px",
    },
    "@media(max-width: 600px) and (max-height: 340px)": {
      height: "200px",
    },
  },
  form_signUp: {
    width: "420px",
    height: "390px",
    transition: "height 0.5s",

    "@media(max-width: 600px)": {
      width: "90%",
    },
    "@media(max-width: 960px) and (max-height: 440px)": {
      height: "350px",
    },
    "@media(max-width: 600px) and (max-height: 340px)": {
      height: "300px",
    },
  },
  input: {
    margin: "10px 0",

    "& label": {
      color: color_white,
      fontWeight: 300,

      "@media(max-width: 600px) and (max-height: 340px)": {
        padding: "0",
      },

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

    "@media(max-width: 600px) and (max-height: 340px)": {
      padding: "0",
      margin: "5px 0",
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

    "@media(max-width: 960px) and (max-height: 440px)": {
      margin: "10px 0",
    },
    "@media(max-width: 600px) and (max-height: 340px)": {
      padding: "5px 0",
    },
  },
  moveBtn: {
    transform: "translateY(120px)",
    transition: "transform 0.5s",

    "@media(max-width: 600px) and (max-height: 340px)": {
      transform: "translateY(100px)",
    },
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
});

export default styles;
