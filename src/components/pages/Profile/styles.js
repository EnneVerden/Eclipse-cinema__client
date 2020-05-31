import { makeStyles } from "@material-ui/core/styles";
import { font_gilroy, color_metallic, color_dark_l0 } from "theme/variables";

const styles = makeStyles({
  panel: {
    display: "flex",
    justifyContent: "space-between",

    "@media(max-width: 1920px)": {
      paddingTop: "7%",
    },
    "@media(max-width: 1366px)": {
      paddingTop: "6%",
    },
    "@media(max-width: 1024px)": {
      flexDirection: "column",
    },
  },
  wrapper: {
    margin: "20px 0",
    padding: "25px 0",
    borderBottom: `1px solid ${color_dark_l0}`,
  },
  title: {
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "2rem",
    color: color_metallic,
    letterSpacing: "1px",
  },
});

export default styles;
