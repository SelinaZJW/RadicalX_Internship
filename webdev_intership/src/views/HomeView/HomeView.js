import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Insights from './components/Insights/Insights';
import Table from './components/Table/Table';
import styles from "./HomeView.module.css";

const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>
      <section className={styles.content}>
        <section className={styles.header}>
          <Header />
        </section>
        <section className={styles.insights}>
          <Insights />
        </section>
        <section className={styles.table}>
          <Table />
        </section>
      </section>
    </main>
  )
};

export default HomeView;