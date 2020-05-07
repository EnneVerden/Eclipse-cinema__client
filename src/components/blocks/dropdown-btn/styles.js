import { makeStyles } from "@material-ui/core/styles";
import { font_information, color_white, color_dark_l2 } from "theme/variables";

const styles = makeStyles({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    border: "none",
    padding: "15px 10px",

    "&:hover": {
      backgroundColor: color_dark_l2,
    },
  },
  avatar: {
    width: "55px",
    height: "55px",
    padding: "0 6px",
    borderRadius: "50%",
  },
  name: {
    fontFamily: `${font_information}, sans-serif`,
    color: color_white,
    letterSpacing: "1px",
  },
});

export default styles;
