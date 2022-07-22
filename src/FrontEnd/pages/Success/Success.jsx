import styles from "./Success.module.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className={styles.under_construction_container}>
      <main className={styles.main}>
        <section className={styles.contact}>
          <h1 className={styles.title}>Your Order is successfully place.</h1>
          <h2 className={styles.sub_title}>
            Our Professionals will contact you soon...
          </h2>
        </section>
        <button className="button">
          <Link to="/">Home</Link>
        </button>
      </main>
    </div>
  );
};

export default Success;
