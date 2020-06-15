import React, { useState, useCallback } from "react";
import classNames from "classnames";

import useStyles from "./styles";

const SearchBar: React.FC = () => {
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);

  const styles = useStyles({ searchIsOpen });

  const handleToggleOpen = useCallback(
    () => setSearchIsOpen((open) => !open),
    []
  );

  return (
    <div
      className={classNames(styles.search, {
        [styles.open]:
          searchIsOpen && document.documentElement.clientWidth < 600,
      })}
    >
      <input type="search" className={styles.searchBox} />
      <span className={styles.searchButton} onClick={handleToggleOpen}>
        <span className={styles.searchIcon}></span>
      </span>
    </div>
  );
};

export default SearchBar;
