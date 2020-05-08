import React from "react";
import classNames from "classnames";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import useStyles from "./styles";
import { color_white } from "theme/variables";

interface IProps {
  avatarURL: string;
  fullName: string;
  isVisible: boolean;
  handleToggle: () => void;
}

const DropdownBtn: React.FC<IProps> = ({
  avatarURL,
  fullName,
  isVisible,
  handleToggle,
}) => {
  const styles = useStyles();

  return (
    <>
      <button
        type="button"
        className={classNames(styles.button, isVisible ? styles.active : null)}
        onClick={handleToggle}
      >
        <img src={avatarURL} alt="avatar" className={styles.avatar} />
        <p className={styles.name}>{fullName}</p>
        <ArrowDropDownIcon style={{ color: color_white }} />
      </button>
    </>
  );
};

export default DropdownBtn;
