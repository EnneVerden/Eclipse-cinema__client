import { makeStyles } from "@material-ui/core";
import { color_red, font_information, color_white } from "@theme/variables";

const styles = makeStyles({
  wrapper: {
    position: "absolute",
    bottom: `85%`,
    right: `0px`,
    overflow: "hidden",
  },
  background: {
    padding: "7px 10px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    display: "flex",
    alignItems: "center",
    backgroundColor: color_red,
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
    color: color_white,
    letterSpacing: "1px",
  },
  isVisible: {
    transform: "translateX(0)",
  },
  error: {
    backgroundColor: color_red,
  },
});

export default styles;
