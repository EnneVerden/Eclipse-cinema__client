import React, { useCallback, useEffect } from "react";
import Tab from "@material-ui/core/Tab";

import useStyles from "./styles";

interface IProps {
  id: string | null;
  label: string;
  tagId: number;
  selected: boolean;
  changeTag: (newTagId: number) => any;
  setCurrentTagId: any;
}

const Tag: React.FC<IProps> = ({
  id,
  label,
  tagId,
  selected,
  changeTag,
  setCurrentTagId,
}) => {
  const styles = useStyles();

  const handleClick = useCallback(() => changeTag(tagId), [tagId, changeTag]);

  useEffect(() => {
    if (selected) setCurrentTagId(id);
  }, [selected]);

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
