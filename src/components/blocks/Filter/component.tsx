import React, {
  useState,
  useCallback,
  useEffect,
  ReactElement,
  useMemo,
} from "react";
import Tabs from "@material-ui/core/Tabs";
import { color_pink, color_red } from "theme/variables";
import Tag from "components/blocks/Tag";
import Container from "components/blocks/Container";
import { TProps } from "./container";
import useStyles from "./styles";
import { ITag } from "types/tags";

const Filter: React.FC<TProps> = ({ tags, fetchTags }) => {
  const styles = useStyles();
  const [tagId, setTagId] = useState<number>(0);
  const [content, setContent] = useState<Array<ReactElement> | []>([]);

  const changeTag = useCallback((newTagId: number) => setTagId(newTagId), []);

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    if (tags) {
      const content = tags.map((tag: ITag, index: number) => (
        <Tag
          key={tag._id}
          label={tag.name}
          tagId={index + 1}
          changeTag={changeTag}
          selected={tagId === index ? true : false}
        />
      ));

      setContent(content);
    }
  }, [tags]);

  return (
    <div className={styles.filter}>
      <Container>
        <div>
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
          >
            <Tag
              label="All movies"
              tagId={0}
              changeTag={changeTag}
              selected={tagId === 0 ? true : false}
            />
            {content}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
