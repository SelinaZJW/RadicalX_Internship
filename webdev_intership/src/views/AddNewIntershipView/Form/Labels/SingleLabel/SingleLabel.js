import React from "react";
import PropTypes from 'prop-types';
import styles from "./SingleLabel.module.css"

const SingleLabel = ({tag, variant, onClick}) => {
  return (
    <section className={styles.label}>
      <section className={`${styles.icon} ${styles[`icon--${variant}`]}`}>
        <i className="bi bi-list"></i>
      </section>
      <button className={`${styles.button} ${styles[`button--${variant}`]}`} onClick={onClick}>
        <p>{tag} {variant === "finished" ? <i className="bi bi-check-circle-fill"></i>: null }</p>
        <i className="bi bi-caret-right-fill"></i>
      </button>
    </section>
  )
}

export default SingleLabel;

SingleLabel.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.oneOf(["active","basic", "finished", "add"])
}