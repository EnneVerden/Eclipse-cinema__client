import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "rgba(38, 38, 43, 0.9)",
    width: "370px",
    padding: "15px 20px",
    boxShadow: "0 0 3px 1px #26262b",
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
  btn: {
    color: "#de5059",
    borderColor: "#de5059",
    margin: "20px 0",
  },
});

export default styles;
