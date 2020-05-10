import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px 0",

    "@media(max-width: 600px)": {
      flexDirection: "column",
      justifyContent: "initial",
      alignItems: "center",
    },
  },
});

export default styles;
