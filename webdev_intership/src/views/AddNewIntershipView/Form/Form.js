import React from "react";
import Labels from "./Labels/Labels";
import InputFields from "./InputFields/InputFields";
import styles from "./Form.module.css"

const Form = () => {
  return (
    <section className={styles.form}>
      <section className={styles.labels} >
        <Labels />
      </section>
      <section className={styles.inputs} >
        <InputFields />
      </section>
    </section>
  )
}

export default Form;