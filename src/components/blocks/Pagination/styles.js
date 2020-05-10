import { makeStyles } from "@material-ui/core/styles";
import {
  color_red,
  color_white,
  color_pink,
  font_gilroy,
  color_dark_l3,
} from "theme/variables";

const styles = makeStyles({
  pagination: {
    display: "flex",
    justifyContent: "center",

    "& .MuiPagination-ul": {
      boxShadow: `0 0 10px 3px ${color_dark_l3}`,
    },

    "& .MuiPaginationItem-root": {
      color: color_white,
      borderRadius: "3px",
      fontSize: "1rem",
      fontFamily: `${font_gilroy}, sans-serif`,
      letterSpacing: "1px",
    },

    "& .MuiPaginationItem-page:hover": {
      background: `linear-gradient(to right, rgba(214, 83, 142, 0.7), rgba(222, 80, 89, 0.7))`,
    },

    "& .MuiPaginationItem-page.Mui-selected": {
      background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
    },
  },
});

export default styles;
