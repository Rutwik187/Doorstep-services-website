import React from "react";
import { Link } from "react-router-dom";
import styles from "./underConstruction.module.css";

const UnderConstruction = () => {
  return (
    <div className={styles.under_construction_container}>
      <main className={styles.main}>
        <section className={styles.contact}>
          <h1 className={styles.title}>Awesome Thing Coming Soon!!!</h1>
          <h2 className={styles.sub_title}>Site Under Construction</h2>
        </section>
        <button className="button">
          <Link to="/">Home</Link>
        </button>
      </main>
    </div>
  );
};

export default UnderConstruction;
