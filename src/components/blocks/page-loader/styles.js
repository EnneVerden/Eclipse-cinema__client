import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  background: {
    height: "100vh",
    backgroundImage: "url(background.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
  },
  wrapper: {
    position: "relative",
    top: "50%",
  },
});

export default styles;
