import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l1 } from "theme/variables";

const styles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: color_dark_l1,
  },
  wrapper: {
    width: "1200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@media(max-width: 600px)": {
      width: "90%",
    },
  },
  padding: {
    padding: "14px 0",
  },
});

export default styles;
