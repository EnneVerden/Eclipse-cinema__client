import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l0,
  color_dark_l3,
  color_pink,
  color_red,
  color_metallic,
  font_gilroy,
} from "theme/variables";

const styles = makeStyles({
  header: (props) => ({
    position: "relative",
    padding: "20px 0",
    backgroundColor: color_dark_l3,
    transition: "transform 0.3s",
    transform: `translateY(${!props.sideMenuIsVisible ? "0" : "-97px"})`,

    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "-2px",
      background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
      zIndex: "100",
    },
  }),
  sideMenu: (props) => ({
    position: "fixed",
    left: 0,
    top: 0,
    backgroundColor: color_dark_l3,
    height: "100vh",
    width: "300px",
    transform: `translateX(${props.sideMenuIsVisible ? "0" : "-300px"})`,
    transition: "transform 0.3s",
  }),
  logo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "-2px",
      background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
      zIndex: "100",
    },
  },
  buttonClose: {
    margin: "0 20px",
    padding: "10px 0",
    borderColor: color_pink,
    minWidth: "50px",
    minHeight: "55px",
  },
  closeIcon: {
    color: color_pink,
  },
  img: {
    padding: "9px 20px",
  },
  profile: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${color_dark_l0}`,
  },
  avatar: {
    width: "45px",
  },
  info: {
    height: "45px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    fontFamily: `${font_gilroy}, sans-serif`,
    color: color_metallic,
    letterSpacing: "1px",
  },
  role: {
    fontSize: "0.8rem",
  },
  name: {
    fontSize: "1rem",
  },
  button: {
    minWidth: "36px",
    padding: "7px 2px",
    borderColor: color_red,
  },
  icon: {
    color: color_red,
  },
  menu: {
    padding: "20px 0",
  },
  item: {
    paddingLeft: "20px",
    color: color_metallic,
    fontSize: "1rem",
    transition: "color 0.3s",

    "&:hover": {
      backgroundColor: color_dark_l3,
      color: color_red,
    },
  },
  title: {
    paddingLeft: "12px",
    letterSpacing: "1px",
  },
});

export default styles;
