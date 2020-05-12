import React, { useState, useCallback } from "react";
import Tabs from "@material-ui/core/Tabs";
import { color_pink, color_red } from "theme/variables";

import useStyles from "./styles";
import Tag from "components/blocks/Tag";
import Container from "components/blocks/Container";

const Filter: React.FC = () => {
  const styles = useStyles();
  const [tagId, setTagId] = useState<number>(0);

  const changeTag = useCallback((newTagId: number) => setTagId(newTagId), []);

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
