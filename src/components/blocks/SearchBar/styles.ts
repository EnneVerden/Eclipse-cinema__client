import { makeStyles } from "@material-ui/core/styles";
import {
  color_dark_l2,
  color_dark_l3,
  color_red,
  font_gilroy,
  color_metallic,
} from "theme/variables";
import { Theme } from "@material-ui/core/styles";

interface StylesProps {
  searchIsOpen: boolean;
}

const styles = makeStyles<Theme, StylesProps>({
  search: ({ searchIsOpen }: StylesProps) => ({
    width: searchIsOpen ? "400px" : "60px",
    height: "40px",
    backgroundColor: searchIsOpen ? color_dark_l3 : color_dark_l2,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.5s ease",

    "&::before": {
      content: '""',
      display: "block",
      width: "2px",
      height: searchIsOpen ? "25px" : "100%",
      margin: searchIsOpen ? "20px 0 20px 30px" : 0,
      position: searchIsOpen ? "absolute" : "relative",
      top: searchIsOpen ? "-12px" : 0,
      background: searchIsOpen ? color_red : color_metallic,
      transition: "all 0.5s ease",
    },
  }),
  open: {
    width: "63% !important",

    "&::before": {
      margin: "20px 0 20px 10px !important",
    },
  },
  searchBox: {
    width: "70%",
    height: "100%",
    boxShadow: "none",
    border: "none",
    background: "transparent",
    padding: "0 45px",
    fontFamily: `${font_gilroy}, sans-serif`,
    fontSize: "1.2rem",
    color: color_metallic,
    letterSpacing: "1px",

    "&:focus": {
      outline: "none",
    },

    "@media(max-width: 600px)": {
      width: "65%",
      padding: "0 20px",
      fontSize: "1rem",
    },
  },
  searchButton: {
    width: "30px",
    height: "30px",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    padding: "10px 20px",
    cursor: "pointer",
  },
  searchIcon: ({ searchIsOpen }: StylesProps) => ({
    width: searchIsOpen ? "30px" : "20px",
    height: searchIsOpen ? "30px" : "20px",
    borderRadius: searchIsOpen ? "60px" : "40px",
    border: `2px solid ${searchIsOpen ? color_red : color_metallic}`,
    display: "block",
    position: "relative",
    top: searchIsOpen ? "-7px" : "-5px",
    marginLeft: "5px",
    transition: "all 0.5s ease",
    margin: searchIsOpen ? 0 : 0,

    "&::before": {
      content: '""',
      width: "2px",
      height: searchIsOpen ? "10px" : "15px",
      position: "absolute",
      right: searchIsOpen ? "12px" : "-5px",
      top: searchIsOpen ? "13px" : "15px",
      display: "block",
      backgroundColor: searchIsOpen ? color_red : color_metallic,
      transform: searchIsOpen ? "rotate(52deg)" : "rotate(-45deg)",
      transition: "all 0.5s ease",
    },
    "&::after": {
      content: '""',
      width: "2px",
      height: searchIsOpen ? "10px" : "15px",
      position: "absolute",
      right: searchIsOpen ? "12px" : "-5px",
      top: searchIsOpen ? "7px" : "15px",
      display: "block",
      backgroundColor: searchIsOpen ? color_red : color_metallic,
      transform: searchIsOpen ? "rotate(-230deg)" : "rotate(-45deg)",
      transition: "all 0.5s ease",
    },
  }),
});

export default styles;
