import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  changer: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  changerTitle: {
    color: "#ffffff",
  },
  changerLink: {
    color: "#de5059",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
  },
});

export default useStyles;
