import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  form: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "rgba(38, 38, 43, 0.9)",
    padding: "15px 20px",
    boxShadow: "0 0 3px 1px #26262b",
  },
  form_signIn: {
    width: "420px",
    height: "270px",
    transition: "height 0.3s",
  },
  form_signUp: {
    width: "420px",
    height: "390px",
    transition: "height 0.5s",
  },
  input: {
    margin: "10px 0",

    "& label": {
      color: "#ffffff",
      fontWeight: 300,

      "&.Mui-focused": {
        color: "#de5059",
      },
    },

    "& .MuiOutlinedInput-root": {
      color: "#ffffff",

      "& fieldset": {
        borderColor: "#ffffff",
      },
      "&:hover fieldset": {
        borderColor: "#de5059",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#de5059",
      },
    },
  },
  hide: {
    display: "none",
    transition: "opacity 0.4s",
  },
  show: {
    display: "inherit",
  },
  animation: {
    opacity: 1,
  },
  btn: {
    color: "#de5059",
    borderColor: "#de5059",
    margin: "20px 0",
  },
  moveBtn: {
    transform: "translateY(120px)",
    transition: "transform 0.5s",
  },
  moveInput: {
    transform: "translateY(60px)",
    transition: "transform 0.5s",
  },
  cancelMoveBtn: {
    transform: "translateY(0)",
    transition: "transform 0s",
  },
  cancelMoveInput: {
    transform: "translateY(0)",
    transition: "transform 0s",
  },
});

export default styles;
