import { makeStyles } from "@material-ui/core/styles";
import {
  font_gilroy,
  color_white,
  color_metallic,
  color_pink,
  color_red,
} from "theme/variables";

const styles = makeStyles({
  wrapper: {
    display: "flex",

    "@media(max-width: 600px)": {
      flexDirection: "column",
    },
  },
  person: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    padding: "20px 0",
  },
  avatar: {
    width: "70px",
    borderRadius: "50%",

    "@media(max-width: 600px)": {
      width: "80px",
    },
  },
  uploaderLabel: {
    marginLeft: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "40px",
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "1rem",
    color: color_metallic,
    letterSpacing: "1px",
    background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
    cursor: "pointer",
    borderRadius: "3px",

    "& *": {
      pointerEvents: "none",
    },
  },
  uploaderFile: {
    width: "0.1px",
    height: "0.1px",
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: -1,
    textAlign: "center",
  },
  uploaderIcon: {
    marginRight: "7px",
  },
  uploaderTitle: {},
  information: {
    padding: "0 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    color: color_white,
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "1.2rem",
    letterSpacing: "1px",

    "@media(max-width: 600px)": {
      fontSize: "1.5rem",
    },
  },
  balance: {
    display: "flex",
    alignItems: "center",
    color: color_metallic,
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "1.1rem",
    letterSpacing: "1px",

    "@media(max-width: 600px)": {
      fontSize: "1.3rem",
    },
  },
  icon: {
    fontSize: "1rem",
    marginRight: "5px",
    color: color_metallic,
  },
  control: {
    display: "flex",
    flex: 3,

    "@media(max-width: 768px)": {
      flex: 2,
    },
    "@media(max-width: 600px)": {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
  },
  tabsWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    padding: "0 50px",

    "@media(max-width: 768px)": {
      padding: 0,
    },
    "@media(max-width: 600px)": {
      padding: 0,
    },
  },
  tabs: {
    height: "70%",

    "@media(max-width: 600px)": {
      height: "60px",
      paddingTop: "25px",
    },
  },
  tab: {
    fontSize: "1rem",
    margin: "0 15px",

    "@media(max-width: 600px)": {
      margin: 0,
      marginRight: "25px",
      fontSize: "1.2rem",
    },
  },
  buttons: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",

    "@media(max-width: 600px)": {
      padding: "10px 0",
    },
  },
  btnHome: {
    margin: "0 20px",
    color: color_red,
    borderColor: color_red,

    "@media(max-width: 600px)": {
      marginLeft: 0,
      padding: "10px 20px",
    },
  },
  btnReplenish: {
    color: color_white,
    letterSpacing: "1px",
    fontWeight: "bold",
    background: `linear-gradient(to right, ${color_pink}, ${color_red})`,

    "@media(max-width: 600px)": {
      padding: "10px 20px",
    },
  },
});

export default styles;
