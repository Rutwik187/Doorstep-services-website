import { Dropdown } from "../../components/dropdown/Dropdown";
import styles from "./checkoutForm.module.css";
import { Cities } from "../../Data/CityData";
import { useParams } from "react-router-dom";

const CheckoutForm = () => {
  const { service } = useParams();
  console.log(service);
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.title}>Checkout Order</div>
          <div className={styles.content}>
            <form>
              <div className={styles["user-details"]}>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Full Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Phone Number</span>
                  <input
                    type="number"
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Email</span>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Service Date</span>
                  <input type="date" required />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Address</span>
                  <textarea
                    type="text"
                    placeholder="Enter your Address"
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>City</span>
                  <Dropdown placeholder="Enter the City" data={Cities} />
                </div>

                <div className={styles["input-box"]}>
                  <span className={styles.details}>Product Description</span>
                  <input
                    type="text"
                    placeholder="Describe the product in detail"
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Note</span>
                  <textarea
                    type="text"
                    placeholder="Describe the problem in detail"
                    required
                  />
                </div>
              </div>
              <button className="button">Book Service</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default CheckoutForm;
