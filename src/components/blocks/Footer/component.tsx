import React from "react";

import Container from "components/blocks/Container";
import useStyles from "./styles";

const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.text}>© 2020 Eclipse-cinema.&nbsp;</p>
          <p className={styles.text}>
            Created by{" "}
            <a href="https://github.com/EnneVerden" className={styles.link}>
              Adamovich Pavel
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
