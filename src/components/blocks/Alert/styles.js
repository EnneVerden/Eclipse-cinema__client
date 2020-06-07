import { makeStyles } from "@material-ui/core";
import {
  color_success,
  color_error,
  font_information,
  color_white,
  color_warning,
  color_success_font,
  color_error_font,
  color_warning_font,
} from "theme/variables";

const styles = makeStyles({
  wrapper: {
    position: "fixed",
    bottom: `85%`,
    right: `0px`,
    overflow: "hidden",
    zIndex: 10000,

    "@media(max-width: 600px)": {
      maxWidth: "90%",
    },
    "@media(max-width: 960px) and (max-height: 440px)": {
      bottom: "80%",
    },
  },
  background: {
    padding: "7px 10px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    display: "flex",
    alignItems: "center",
    transform: "translateX(101%)",
    transition: "transform 0.5s",
  },
  icon: {
    marginTop: "3px",
    marginRight: "7px",

    "& .MuiSvgIcon-root": {
      color: color_white,
    },
  },
  message: {
    fontFamily: `${font_information}, sans-serif`,
    letterSpacing: "1px",
  },
  isVisible: {
    transform: "translateX(0)",
  },
  success: {
    color: color_success_font,
    backgroundColor: color_success,
  },
  error: {
    color: color_error_font,
    backgroundColor: color_error,
  },
  warning: {
    color: color_warning_font,
    backgroundColor: color_warning,
  },
});

export default styles;
