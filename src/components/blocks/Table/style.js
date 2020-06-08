import { makeStyles } from "@material-ui/core/styles";
import {
  font_gilroy,
  color_metallic,
  color_dark_l1,
  color_dark_l2,
  color_white,
  color_pink,
  color_red,
} from "theme/variables";

const styles = makeStyles({
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "30px",

    "@media(max-width: 768px)": {
      display: "block",
      overflow: "scroll",
    },
  },
  th: {
    padding: "15px",
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "0.8rem",
    color: color_metallic,
    letterSpacing: "1px",
    textTransform: "uppercase",

    "@media(max-width: 768px)": {
      minWidth: "250px",
      fontSize: "0.9rem",
    },
  },
  bodyTR: {
    backgroundColor: color_dark_l2,
    borderBottom: `15px solid ${color_dark_l1}`,
  },
  bodyTD: {
    padding: "15px",
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "1rem",
    color: color_white,
    letterSpacing: "1px",

    "@media(max-width: 600px)": {
      minWidth: "250px",
      fontSize: "1.2rem",
    },
  },
  avatar: {
    width: "50px",
    borderRadius: "50%",
  },
  button: {
    minWidth: "30px",
    padding: "3px 5px",
    marginRight: "10px",
    color: color_white,

    "@media(max-width: 600px)": {
      minWidth: "44px",
      padding: "8px 5px",
    },
  },
  buttonEdit: {
    borderColor: color_pink,
  },
  buttonRemove: {
    borderColor: color_red,
  },
  icon: {
    fontSize: "1.3rem",
  },
  iconEdit: {
    color: color_pink,
  },
  iconRemove: {
    color: color_red,
  },
  deletionStatus: {
    color: color_red,
  },
});

export default styles;
