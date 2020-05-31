import { makeStyles } from "@material-ui/core/styles";
import { color_dark_l1 } from "theme/variables";

const styles = makeStyles({
  background: (props) => ({
    minHeight:
      props.heightElementsAbove >= 0 && props.footerHeight
        ? `calc(100vh - ${props.heightElementsAbove + props.footerHeight}px)`
        : "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: color_dark_l1,

    "@media(max-width: 1366px)": {
      minHeight:
        props.heightElementsAbove >= 0
          ? `calc(100vh - ${props.heightElementsAbove}px)`
          : "100%",
    },
    "@media(max-width: 1024px)": {
      minHeight:
        props.heightElementsAbove && props.footerHeight
          ? `calc(100vh - ${props.heightElementsAbove + props.footerHeight}px)`
          : "100%",
    },
    "@media(max-width: 600px)": {
      minHeight: props.heightElementsAbove
        ? `calc(100vh - ${props.heightElementsAbove}px)`
        : "100%",
    },
  }),
});

export default styles;
