import React, { useMemo, useState, useEffect, useCallback } from "react";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CheckIcon from "@material-ui/icons/Check";
import moment from "moment";

import useStyles from "./styles";
import { TProps } from "./types";
import { ITag } from "types/tags";

const Card: React.FC<TProps> = ({
  _id,
  name,
  poster,
  description,
  tags,
  startDate,
  endDate,
  ticketPrice,
  user,
  buyMovie,
}) => {
  const [boughtTicket, setBoughtTicket] = useState<boolean>(false);
  const styles = useStyles();

  const tagsNamesArray = tags.map((tag: ITag) => tag.name);
  const displayedTags = useMemo(() => tagsNamesArray.join(", "), [
    tagsNamesArray,
  ]);

  const sDate = useMemo(() => moment(startDate).format("YYYY.MM.DD"), [
    startDate,
  ]);
  const eDate = useMemo(() => moment(endDate).format("YYYY.MM.DD"), [endDate]);

  const handleBuy = useCallback(() => buyMovie(_id), [buyMovie, _id]);

  useEffect(() => {
    if (user.tickets) {
      user.tickets.forEach((ticket) => {
        if (ticket._id === _id) {
          setBoughtTicket(true);
        }
      });
    }
  }, [user.tickets, _id]);

  return (
    <Fade in>
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
                className={styles.button}
                disabled={boughtTicket ? true : false}
                classes={{ disabled: styles.disabledButton }}
                onClick={handleBuy}
              >
                {boughtTicket ? <CheckIcon /> : <ShoppingCartIcon />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
