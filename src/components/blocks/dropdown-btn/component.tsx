import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import useStyles from "./styles";
import { color_white } from "theme/variables";

interface IProps {
  avatarURL: string;
  fullName: string;
}

const DropdownBtn: React.FC<IProps> = ({ avatarURL, fullName }) => {
  const styles = useStyles();

  return (
    <>
      <button type="button" className={styles.button}>
        <img src={avatarURL} alt="avatar" className={styles.avatar} />
        <p className={styles.name}>{fullName}</p>
        <ArrowDropDownIcon style={{ color: color_white }} />
      </button>
    </>
  );
};

export default DropdownBtn;
