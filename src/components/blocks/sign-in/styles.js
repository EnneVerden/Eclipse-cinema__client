import { makeStyles } from "@material-ui/core/styles";
import { color_red } from "theme/variables";

const styles = makeStyles({
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  btn: {
    color: color_red,
    borderColor: color_red,
  },
});

export default styles;
