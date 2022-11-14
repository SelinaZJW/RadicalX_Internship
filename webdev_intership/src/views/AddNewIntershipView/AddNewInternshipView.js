import React from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./AddNewInternshipView.module.css"

const AddNewInternshipView = () => {
  return (
    <main className={styles.add}>
      <Header />
      <ProgressBar />
      <Form />
    </main>
  )
}

export default AddNewInternshipView;