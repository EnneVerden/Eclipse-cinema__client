import React, { useState, useCallback, useEffect, ReactElement } from "react";
import Tabs from "@material-ui/core/Tabs";
import { color_pink, color_red } from "theme/variables";
import Tag from "components/blocks/Tag";
import Container from "components/blocks/Container";
import { TProps } from "./container";
import useStyles from "./styles";
import { ITag } from "types/tags";

const Filter: React.FC<TProps> = ({ tags, fetchTags, movies, fetchMovies }) => {
  const styles = useStyles();
  const [tagId, setTagId] = useState<number>(0);
  const [content, setContent] = useState<ReactElement[] | []>([]);
  const [currentTagId, setCurrentTagId] = useState<string | null>(null);

  const changeTag = useCallback((newTagId: number) => setTagId(newTagId), []);

  useEffect(() => {
    if (!tags.length) fetchTags();
  }, []);

  useEffect(() => {
    if (tags.length) {
      const newContent = tags.map((tag: ITag, index: number) => (
        <Tag
          key={tag._id}
          id={tag._id}
          label={tag.name}
          tagId={index + 1}
          changeTag={changeTag}
          selected={tagId === index ? true : false}
          setCurrentTagId={setCurrentTagId}
        />
      ));

      setContent(newContent);
    }
  }, [tags]);

  useEffect(() => {
    if (currentTagId === null) {
      fetchMovies();
    } else {
      fetchMovies("1", currentTagId);
    }
  }, [currentTagId]);

  return (
    <div className={styles.filter}>
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
          <Tag
            id={null}
            label="All movies"
            tagId={0}
            changeTag={changeTag}
            selected={tagId === 0 ? true : false}
            setCurrentTagId={setCurrentTagId}
          />
          {content}
        </Tabs>
      </Container>
    </div>
  );
};

export default Filter;
