import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px 0",

    "@media(max-width: 960px)": {
      flexDirection: "column",
      margin: "0",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      flexDirection: "column",
      margin: "0",
    },
    "@media(max-width: 600px)": {
      flexDirection: "column",
      justifyContent: "initial",
      alignItems: "center",
      margin: "0",
    },
  },
});

export default styles;
