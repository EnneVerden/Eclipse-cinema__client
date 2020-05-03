import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  background: {
    height: "100vh",
    backgroundImage: "url(background.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
  },
  wrapper: {
    position: "relative",
    top: "50%",
    background: "red",

    "@media(max-width: 600px)": {
      top: "40%",
    },
  },
});

export default styles;
