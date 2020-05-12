import React, { useState, useCallback, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import { color_pink, color_red } from "theme/variables";
import Tag from "components/blocks/Tag";
import Container from "components/blocks/Container";
import { TProps } from "./container";
import useStyles from "./styles";

const Filter: React.FC<TProps> = ({ fetchTags }) => {
  const styles = useStyles();
  const [tagId, setTagId] = useState<number>(0);

  const changeTag = useCallback((newTagId: number) => setTagId(newTagId), []);

  useEffect(() => {
    fetchTags();
  }, []);

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
          ></Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
