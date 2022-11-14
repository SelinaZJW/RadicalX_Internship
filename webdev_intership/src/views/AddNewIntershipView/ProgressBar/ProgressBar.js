import React from "react";
import Progress from "./Progress/Progress";
import styles from "./ProgressBar.module.css"

const ProgressBar = () => {
  return (
    <section className={styles["progress-bar"]}>
      <Progress tag="Internship Description" variant="active" />
      <Progress tag="Internship Guide" variant="disabled" />
      <Progress tag="Surveys" variant="disabled" />
      <Progress tag="Settings" variant="disabled" />
    </section>
  )
}

export default ProgressBar;

