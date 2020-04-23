import { makeStyles } from "@material-ui/core/styles";
import {
  font_information,
  color_white,
  color_red,
} from "../../../theme/variables";

const useStyles = makeStyles({
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
});

export default useStyles;
