import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";
import { Formik } from "formik";
import PublishIcon from "@material-ui/icons/Publish";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

import useStyles from "./styles";
import { TProps, TFieldNames } from "./types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MovieForm: React.FC<TProps> = ({
  tags,
  setAlert,
  fetchTags,
  addMovie,
  handleCloseModal,
  updateMovie,
  _id,
  oldMovieName,
  oldDescription,
  oldTags,
  oldStartDate,
  oldEndDate,
  oldTicketPrice,
}) => {
  const styles = useStyles();
  const [poster, setPoster] = useState<any>();
  const [tagsId, setTagsId] = useState<string[]>([]);
  const [tagsName, setTagsName] = useState<string[]>(oldTags || []);

  const handleChangeImg = useCallback((event: any) => {
    setPoster(event.target);
  }, []);

  const handleChangeTag = useCallback(
    (event: any) => setTagsName(event.target.value),
    [setTagsName]
  );

  const validate = (
    fieldName: TFieldNames,
    value: string | string[]
  ): boolean => {
    if (fieldName === "tags" && !tagsId.length) {
      setAlert({
        type: "warning",
        message: `Please, fill the ${fieldName} field`,
      });
      return false;
    } else if (!value) {
      setAlert({
        type: "warning",
        message: `Please, fill the ${fieldName} field`,
      });
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (!tags.length) {
      fetchTags();
    }
  }, [tags, fetchTags]);

  useEffect(() => {
    if (tagsName.length) {
      const arr: string[] = [];

      tagsName.forEach((tagName) => {
        tags.forEach((tag) => {
          if (tag.name === tagName) {
            arr.push(tag._id);
          }
        });
      });

      setTagsId(arr);
    }
  }, [tagsName, tags, setTagsId]);

  return (
    <Formik
      initialValues={{
        movieName: oldMovieName || "",
        description: oldDescription || "",
        startDate: oldStartDate || "",
        endDate: oldEndDate || "",
        ticketPrice: oldTicketPrice?.toString() || "",
      }}
      onSubmit={({
        movieName,
        description,
        startDate,
        endDate,
        ticketPrice,
      }) => {
        if (!_id) {
          if (!validate("poster", poster)) return;
        }
        if (!validate("movieName", movieName)) return;
        if (!validate("description", description)) return;
        if (!validate("tags", tagsId)) return;
        if (!validate("startDate", startDate)) return;
        if (!validate("endDate", endDate)) return;
        if (!validate("ticketPrice", ticketPrice)) return;

        if (_id && poster) {
          updateMovie(_id, {
            poster,
          });
        } else if (_id) {
          updateMovie(_id, {
            movieName,
            description,
            tags: tagsId,
            startDate,
            endDate,
            ticketPrice: parseInt(ticketPrice),
          });
        } else {
          addMovie({
            poster,
            movieName,
            description,
            tags: tagsId,
            startDate,
            endDate,
            ticketPrice: parseInt(ticketPrice),
          });
        }
        handleCloseModal();
      }}
    >
      {({
        values: { movieName, description, startDate, endDate, ticketPrice },
        handleSubmit,
        handleChange,
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.modalPoster}>
            <span>Choose a poster:</span>
            <label htmlFor="file" className={styles.uploaderLabel}>
              <input
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                name="poster"
                className={styles.uploaderFile}
                onChange={handleChangeImg}
              />
              <PublishIcon className={styles.uploaderIcon} />
              <span>Upload</span>
            </label>
          </div>
          <TextField
            label="Movie name"
            variant="outlined"
            size="small"
            name="movieName"
            value={movieName}
            className={styles.input}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            variant="outlined"
            size="small"
            name="description"
            value={description}
            className={styles.input}
            onChange={handleChange}
          />
          <FormControl className={classNames(styles.formControl, styles.input)}>
            <InputLabel>Tags</InputLabel>
            <Select
              multiple
              value={tagsName}
              onChange={handleChangeTag}
              renderValue={(selected: any) => (
                <div className={styles.chips}>
                  {selected.map((value: any) => (
                    <Chip key={value} label={value} className={styles.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
              classes={{ icon: styles.icon }}
            >
              {tags.map((tag) => (
                <MenuItem key={tag._id} value={tag.name}>
                  {tag.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={styles.date}>
            <span className={styles.dateLabel}>Start date</span>
            <TextField
              type="date"
              variant="outlined"
              size="small"
              name="startDate"
              value={startDate}
              className={classNames(styles.input, styles.dateInput)}
              onChange={handleChange}
            />
          </div>
          <div className={styles.date}>
            <span className={styles.dateLabel}>End date</span>
            <TextField
              type="date"
              variant="outlined"
              size="small"
              name="endDate"
              value={endDate}
              className={classNames(styles.input, styles.dateInput)}
              onChange={handleChange}
            />
          </div>
          <TextField
            type="number"
            label="Ticket price"
            variant="outlined"
            size="small"
            name="ticketPrice"
            value={ticketPrice}
            className={styles.input}
            onChange={handleChange}
          />
          <Button
            type="submit"
            size="medium"
            fullWidth
            className={styles.button}
          >
            Save
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default MovieForm;
