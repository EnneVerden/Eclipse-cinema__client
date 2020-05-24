import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l2,
  font_gilroy,
  color_white,
  color_metallic,
  shadow_color,
} from "theme/variables";

const styles = makeStyles({
  filter: {
    position: "relative",
    zIndex: 1,
    backgroundColor: color_dark_l2,
    boxShadow: `0 0 10px 3px ${shadow_color}`,
    display: "flex",
    justifyContent: "center",
    overflow: "auto",

    "& .MuiTabs-scrollButtons": {
      color: color_metallic,
      width: "auto",
    },
  },
  wrapper: {
    padding: "20px 0",
    display: "flex",
  },
  title: {
    color: color_white,
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "2.2rem",
    letterSpacing: "1px",
  },
});

export default styles;
