import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l1,
  font_gilroy,
  color_pink,
  color_red,
  color_metallic,
  color_white,
} from "theme/variables";

const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: color_dark_l1,
    padding: "15px 40px",
    boxShadow: `0 0 10px 3px #222024`,

    "@media(max-width: 360px)": {
      width: "95%",
      padding: "10px 0",
    },
  },
  code: {
    fontFamily: font_gilroy,
    fontSize: "10rem",
    background: `-webkit-linear-gradient(${color_pink}, ${color_red})`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    color: color_red,
    textShadow: `0 0 10px ${color_red}`,

    "@media(max-width: 360px)": {
      fontSize: "9rem",
    },
  },
  title: {
    padding: "10px 0",
    fontFamily: font_gilroy,
    fontSize: "1.5rem",
    color: color_metallic,
    letterSpacing: "1px",

    "@media(max-width: 360px)": {
      fontSize: "1.4rem",
    },
  },
  btnWrapper: {
    padding: "20px 0",
  },
  button: {
    background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
    color: color_white,
  },
});

export default styles;
