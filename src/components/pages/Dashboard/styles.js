import { makeStyles } from "@material-ui/core/styles";
import {
  font_gilroy,
  color_dark_l0,
  color_metallic,
  color_pink,
  color_red,
  color_white,
  color_dark_l3,
  shadow_color,
} from "theme/variables";

const styles = makeStyles({
  wrapper: {
    margin: "11px 0",
    padding: "25px 0",
    borderBottom: `1px solid ${color_dark_l0}`,
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "2rem",
    color: color_metallic,
    letterSpacing: "1px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
    color: color_white,
    minWidth: "155px",
    padding: "6px 15px",
  },
  btnText: {
    fontSize: "1rem",
  },
  buttonRemove: {
    background: "none",
    borderColor: color_red,
    color: color_red,
    minWidth: "160px",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "400px",
    height: "auto",
    padding: "30px",
    backgroundColor: color_dark_l3,
    boxShadow: `0 0 10px 3px ${shadow_color}`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    "&::before": {
      content: '""',
      position: "absolute",
      top: "-4px",
      left: 0,
      width: "100%",
      height: "4px",
      background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
    },
  },
});

export default styles;
