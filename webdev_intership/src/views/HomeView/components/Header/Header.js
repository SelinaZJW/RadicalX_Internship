import React from "react";
import { Button } from "../../../../stories/Button";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <section className={styles.header} >
      <h3>
        Internships
      </h3>
      <Button variant="primary" size="medium" id={styles.button}> <i class="bi bi-plus-square"></i> Create New Internship</Button>

    </section>
  )
}

export default Header;