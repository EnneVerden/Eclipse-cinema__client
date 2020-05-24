import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url(background.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
  },
});

export default styles;
