import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l3 } from "@theme/variables";

const styles = makeStyles({
  background: {
    height: "100vh",
    backgroundColor: color_dark_l3,
  },
  loader: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100px",
    height: "100px",
    perspective: "780px",
  },
  loaderInner: {
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    borderRadius: "50%",
  },
  loaderOne: {
    left: "0%",
    top: "0%",
    animation: "$loader-rotate-one 1.15s linear infinite",
    borderBottom: "3px solid #5C5EDC",
  },
  loaderTwo: {
    right: "0%",
    top: "0%",
    animation: "$loader-rotate-two 1.15s linear infinite",
    borderRight: "3px solid rgba(76, 70, 101, 0.99)",
  },
  loaderThree: {
    right: "0%",
    bottom: "0%",
    animation: "$loader-rotate-three 1.15s linear infinite",
    borderTop: "3px solid rgb(233, 144, 138)",
  },
  "@keyframes loader-rotate-one": {
    "0%": {
      transform: "rotateX(35deg) rotateY(-45deg) rotateZ(0deg)",
    },
    "100%": {
      transform: "rotateX(35deg) rotateY(-45deg) rotateZ(360deg)",
    },
  },
  "@keyframes loader-rotate-two": {
    "0%": {
      transform: "rotateX(50deg) rotateY(10deg) rotateZ(0deg)",
    },
    "100%": {
      transform: "rotateX(50deg) rotateY(10deg) rotateZ(360deg)",
    },
  },
  "@keyframes loader-rotate-three": {
    "0%": {
      transform: "rotateX(35deg) rotateY(55deg) rotateZ(0deg)",
    },
    "100%": {
      transform: "rotateX(35deg) rotateY(55deg) rotateZ(360deg)",
    },
  },
});

export default styles;
