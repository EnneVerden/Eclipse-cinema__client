import { makeStyles } from "@material-ui/core/styles";
import {
  font_gilroy,
  color_white,
  color_red,
  color_metallic,
} from "theme/variables";

const styles = makeStyles({
  card: {
    width: "48%",
    margin: "30px 0",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: `${font_gilroy}, sans-serif`,

    "@media(max-width: 960px)": {
      width: "100%",
      margin: "20px 0",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      width: "100%",
      margin: "20px 0",
    },
    "@media(max-width: 600px)": {
      width: "100%",
      margin: "20px 0",
      flexDirection: "column",
      alignItems: "center",
    },
    "@media(max-width: 568px) and (max-height: 320px)": {
      flexDirection: "row",
      alignItems: "initial",
    },
  },
  poster: {
    marginRight: "10px",

    "@media(max-width: 960px)": {
      width: "100%",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      width: "100%",
      margin: "0",
    },
    "@media(max-width: 600px)": {
      width: "100%",
      margin: "0",
    },
  },
  img: {
    width: "170px",

    "@media(max-width: 960px)": {
      width: "100%",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      width: "100%",
    },
    "@media(max-width: 600px)": {
      width: "100%",
    },
  },
  info: {
    marginLeft: "10px",
    display: "flex",
    flexDirection: "column",

    "@media(max-width: 600px)": {
      margin: "0",
      marginTop: "20px",
    },
    "@media(max-width: 568px) and (max-height: 320px)": {
      margin: "0",
    },
  },
  name: {
    color: color_white,
    fontSize: "1.5rem",
    letterSpacing: "1px",

    "@media(max-width: 960px)": {
      fontSize: "2rem",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      fontSize: "2rem",
    },
    "@media(max-width: 600px)": {
      fontSize: "2rem",
    },
  },
  tags: {
    marginTop: "7px",
    color: color_red,
    fontSize: "0.9rem",
    letterSpacing: "1px",

    "@media(max-width: 960px)": {
      fontSize: "1rem",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      fontSize: "1rem",
    },
    "@media(max-width: 600px)": {
      fontSize: "1rem",
    },
  },
  separator: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  description: {
    marginTop: "15px",
    color: color_metallic,
    lineHeight: "1.2rem",
    letterSpacing: "1px",

    "@media(max-width: 960px)": {
      fontSize: "1.1rem",
      lineHeight: "1.3rem",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      fontSize: "1.1rem",
      lineHeight: "1.3rem",
    },
    "@media(max-width: 600px)": {
      fontSize: "1.1rem",
      lineHeight: "1.3rem",
    },
  },
  choice: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: color_metallic,

    "@media(max-width: 600px)": {
      marginTop: "20px",
    },
  },
  price: {
    fontSize: "2.2rem",
    color: color_red,

    "@media(max-width: 960px)": {
      fontSize: "3rem",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      fontSize: "3rem",
    },
    "@media(max-width: 600px)": {
      fontSize: "2.3rem",
    },
  },
  date: {
    letterSpacing: "1px",
    textAlign: "center",
  },
  btn: {
    color: color_red,
    borderColor: color_red,

    "@media(max-width: 960px)": {
      padding: "12px 30px",
    },
    "@media(max-width: 960px) and (max-height: 600px)": {
      padding: "12px 30px",
    },
    "@media(max-width: 600px)": {
      padding: "8px 20px",
    },
  },
});

export default styles;
