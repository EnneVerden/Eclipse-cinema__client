import { makeStyles } from "@material-ui/core/styles";
import { font_information, color_dark_l1 } from "theme/variables";

const styles = makeStyles({
  item: {
    padding: "7px 10px",
    fontFamily: `${font_information}, sans-serif`,
    letterSpacing: "1px",

    "&:hover": {
      backgroundColor: color_dark_l1,
    },
    "&:last-child": {
      borderBottomLeftRadius: "3px",
      borderBottomRightRadius: "3px",
    },
  },
});

export default styles;
