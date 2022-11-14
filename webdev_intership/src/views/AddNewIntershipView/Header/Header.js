import React from "react";
import { Button } from "../../../stories/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <section className={styles.button}>
        <Button variant="basic" size="medium" id={styles.button1} > <i className="bi bi-arrow-left"></i> Back </Button>
      </section>
      <h3>
        Add New Internship
      </h3>
      <section className={styles.button}>
        <Button variant="disabled" size="medium" id={styles.button2} >Continue to Next Step <i className="bi bi-arrow-right"></i></Button>
      </section>
    </section>
  )
}

export default Header;