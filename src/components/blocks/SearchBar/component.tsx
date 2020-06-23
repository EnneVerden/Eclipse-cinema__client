import React, {
  useState,
  useCallback,
  ChangeEvent,
  useRef,
  useEffect,
} from "react";
import classNames from "classnames";
import { useClickOutside } from "hooks/click-outside";

import useStyles from "./styles";
import { TProps } from "./types";

const SearchBar: React.FC<TProps> = ({ searchMovie }) => {
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [movieName, setMovieName] = useState<string>("");
  const searchBarRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const styles = useStyles({ searchIsOpen });

  const handleClose = useCallback(() => setSearchIsOpen(false), []);

  const handleToggleOpen = useCallback(() => {
    if (searchIsOpen && movieName) {
      searchMovie(movieName);
      setMovieName("");
    }

    return setSearchIsOpen(true);
  }, [searchIsOpen, movieName]);

  const handleChange = useCallback(
    (event: ChangeEvent<{ value: any }>) => setMovieName(event.target.value),
    []
  );

  useClickOutside(searchBarRef, handleClose);

  useEffect(() => {
    if (searchIsOpen) {
      inputRef.current.focus();
    }
  }, [searchIsOpen]);

  return (
    <div
      className={classNames(styles.search, {
        [styles.open]:
          searchIsOpen && document.documentElement.clientWidth < 600,
      })}
      ref={searchBarRef}
    >
      <input
        type="search"
        className={styles.searchBox}
        value={movieName}
        onChange={handleChange}
        ref={inputRef}
      />
      <span className={styles.searchButton} onClick={handleToggleOpen}>
        <span className={styles.searchIcon}></span>
      </span>
    </div>
  );
};

export default SearchBar;
