import React, { useCallback } from "react";
import Tab from "@material-ui/core/Tab";

import useStyles from "./styles";

interface IProps {
  label: string;
  tagId: number;
  selected: boolean;
  changeTag: (newTagId: number) => any;
}

const Tag: React.FC<IProps> = ({ label, tagId, selected, changeTag }) => {
  const styles = useStyles();

  const handleClick = useCallback(() => changeTag(tagId), [tagId, changeTag]);

  return (
    <Tab
      label={label}
      onClick={handleClick}
      className={styles.tag}
      selected={selected}
      disableTouchRipple={true}
    />
  );
};

export default Tag;
