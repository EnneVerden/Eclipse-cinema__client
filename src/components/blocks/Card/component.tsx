import React, { useMemo } from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ITag } from "types/tags";
import moment from "moment";

import useStyles from "./styles";

interface IProps {
  name: string;
  poster: string;
  description: string;
  tags: Array<ITag>;
  startDate: string;
  endDate: string;
  ticketPrice: number;
}

const Card: React.FC<IProps> = ({
  name,
  poster,
  description,
  tags,
  startDate,
  endDate,
  ticketPrice,
}) => {
  const styles = useStyles();

  const tagsNamesArray = tags.map((tag) => tag.name);
  const displayedTags = useMemo(() => tagsNamesArray.join(", "), [tags]);

  const sDate = useMemo(() => moment(startDate).format("YYYY.MM.DD"), [
    startDate,
  ]);
  const eDate = useMemo(() => moment(endDate).format("YYYY.MM.DD"), [endDate]);

  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <img src={poster} alt="poster" className={styles.img} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.tags}>{displayedTags}</div>
        <div className={styles.separator}>
          <div className={styles.description}>{description}</div>
          <div className={styles.choice}>
            <p className={styles.price}>{ticketPrice}$</p>
            <p className={styles.date}>
              {sDate} - {eDate}
            </p>
            <Button
              type="button"
              variant="outlined"
              size="large"
              className={styles.btn}
            >
              <ShoppingCartIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
