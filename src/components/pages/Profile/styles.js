import { makeStyles } from "@material-ui/core/styles";

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
});

export default styles;
