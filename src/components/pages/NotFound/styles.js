import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l0 } from "theme/variables";

const styles = makeStyles({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundColor: color_dark_l0,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
  },
});

export default styles;
