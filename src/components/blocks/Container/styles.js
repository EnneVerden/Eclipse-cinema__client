import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  container: {
    width: "1200px",

    "@media(max-width: 600px)": {
      width: "90%",
    },
    "@media(min-width: 601px) and (max-width: 960px) and (max-height: 600px)": {
      width: "90%",
    },
  },
});

export default styles;
