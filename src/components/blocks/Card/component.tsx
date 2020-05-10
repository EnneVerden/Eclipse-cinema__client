import React from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import useStyles from "./styles";

interface IProps {
  name: string;
  poster: string;
  description: string;
  tags: Array<string>;
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

  const displayedTags = tags.join(", ");

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
              {startDate.replace(/\-/g, ".")} - {endDate.replace(/\-/g, ".")}
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
