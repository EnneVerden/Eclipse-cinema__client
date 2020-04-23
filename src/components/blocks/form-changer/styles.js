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
  move: {
    transform: "translateY(120px)",
    transition: "transform 0.5s",
  },
  cancelMove: {
    transform: "translateY(0)",
    transition: "transform 0s",
  },
});

export default useStyles;
