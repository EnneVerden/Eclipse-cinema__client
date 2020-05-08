import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l1 } from "theme/variables";

const styles = makeStyles({
  item: {
    padding: "7px 10px",
    display: "flex",
    alignItems: "center",

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
