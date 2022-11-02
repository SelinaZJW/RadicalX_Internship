import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import styles from "./HomeView.module.css";

const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>
      <section className={styles.content}>
        <section className={styles.header}>
          we
        </section>
        <section className={styles.insights}>
          erwe
        </section>
        <section className={styles.table}>
          wer
        </section>
      </section>
    </main>
  )
};

export default HomeView;