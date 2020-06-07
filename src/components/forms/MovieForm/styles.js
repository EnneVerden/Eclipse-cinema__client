import { makeStyles } from "@material-ui/core/styles";
import {
  font_gilroy,
  color_metallic,
  color_pink,
  color_red,
  color_white,
} from "theme/variables";

const styles = makeStyles({
  form: {},
  modalPoster: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.3rem",
    fontFamily: `${font_gilroy}, sans-serif`,
    letterSpacing: "1px",
    color: color_metallic,
    marginBottom: "25px",
  },
  uploaderLabel: {
    marginLeft: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "40px",
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "1rem",
    color: color_metallic,
    letterSpacing: "1px",
    background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
    cursor: "pointer",
    borderRadius: "3px",

    "& *": {
      pointerEvents: "none",
    },
  },
  uploaderFile: {
    width: "0.1px",
    height: "0.1px",
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: -1,
    textAlign: "center",
  },
  uploaderIcon: {
    marginRight: "7px",
  },
  input: {
    margin: "12px 0",
    width: "100%",
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
  formControl: {
    margin: "8px",
    minWidth: "120px",
    maxWidth: "100%",
    marginLeft: 0,

    "& .MuiInput-underline:before": {
      borderColor: color_metallic,
    },

    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderColor: color_red,
    },
  },
  icon: {
    color: color_metallic,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
    color: color_white,
    letterSpacing: "1px",
    background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
  },
  date: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateLabel: {
    fontFamily: `${font_gilroy}, sans-serif`,
    color: color_metallic,
    letterSpacing: "1px",
  },
  dateInput: {
    width: "300px",
  },
  button: {
    marginTop: "20px",
    color: color_red,
    border: `1px solid ${color_red}`,
  },
});

export default styles;
