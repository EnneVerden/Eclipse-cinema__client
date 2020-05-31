import { makeStyles } from "@material-ui/core/styles";
import { font_gilroy, color_white } from "theme/variables";

const styles = makeStyles({
  wrapper: {
    marginRight: "15px",
  },
  tab: {
    padding: "6px 0",
    marginRight: "20px",
    color: color_white,
    minWidth: "0",
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "0.9rem",
    letterSpacing: "1px",
    transition: "color 0.3s",
    opacity: 0.6,

    "&:hover": {
      opacity: 1,
    },
    "&$selected": {
      opacity: 1,
    },
  },
});

export default styles;
