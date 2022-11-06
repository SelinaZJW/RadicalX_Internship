import React from "react";
import { Button } from "../../../../stories/Button";
import styles from "./Insights.module.css"

const Insights = () => {
  return (
    <section className={styles.insights}>
      <section className={styles.left}>
        <h5>
          Internship Insights
        </h5>
        <p>In the eighteenth century, the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.</p>
      </section>
      <section className={styles.right}>
        <section className={styles.bar} >
          <div>
          <Button variant="basic" size="small" id={styles["button--active"]} styling={{marginRight: "1em"}}> this week </Button>
          <Button variant="basic" size="small" id={styles.button}> this month </Button>
          </div>
          <Button variant="basic" size="small"id={styles.button} > <i className="bi bi-calendar2-week"></i> select dates </Button>
        </section>
        <section className={styles.graph}>
          <img src="/images/graph.png" alt="graph"  />
        </section>

      </section>
    </section>
  )
}

export default Insights;