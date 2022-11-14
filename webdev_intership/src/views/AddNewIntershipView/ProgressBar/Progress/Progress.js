import React from "react";
import PropTypes from 'prop-types';
import styles from "./Progress.module.css";

const Progress = ({tag, variant}) => {
  return (
    <p className={styles[`progress-${variant}`]}>
      {variant==="finished" ? <i className="bi bi-check-circle"></i> : <i className="bi bi-circle"></i>} {tag}
    </p>
  )
}

export default Progress;

Progress.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.oneOf(["active","disabled", "finished"])
}