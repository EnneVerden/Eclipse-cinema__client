import React, { useState, useCallback, useEffect, ReactElement } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "components/blocks/Tab";
import Container from "components/blocks/Container";
import Panel from "components/blocks/Panel";
import { TProps } from "./container";
import { ITag } from "types/tags";

import useStyles from "./styles";
import { color_pink, color_red } from "theme/variables";

const Filter: React.FC<TProps> = ({ tags, fetchTags, fetchMovies }) => {
  const styles = useStyles();
  const [tagId, setTagId] = useState<number>(0);
  const [content, setContent] = useState<ReactElement[] | []>([]);

  const changeTag = useCallback((newTagId: number) => setTagId(newTagId), []);

  useEffect(() => {
    if (!tags.length) fetchTags();
  }, [fetchTags, tags.length]);

  useEffect(() => {
    if (tags.length) {
      const newContent = tags.map((tag: ITag, index: number) => (
        <Tab
          key={tag._id}
          id={tag._id}
          label={tag.name}
          tabId={index + 1}
          changeTab={changeTag}
        />
      ));

      setContent(newContent);
    }
  }, [tags, changeTag]);

  useEffect(() => {
    if (tagId === 0) {
      fetchMovies();
    } else {
      fetchMovies("1", tags[tagId - 1]._id);
    }
  }, [tagId, fetchMovies, tags]);

  return (
    <Panel>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Movies</h2>
        </div>
        <Tabs
          value={tagId}
          TabIndicatorProps={{
            style: {
              background: `linear-gradient(to right, ${color_pink}, ${color_red})`,
            },
          }}
          variant="scrollable"
        >
          <Tab id={null} label="All movies" tabId={0} changeTab={changeTag} />
          {content}
        </Tabs>
      </Container>
    </Panel>
  );
};

export default Filter;
