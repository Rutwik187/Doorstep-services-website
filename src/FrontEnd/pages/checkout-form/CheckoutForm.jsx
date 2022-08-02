import { Dropdown } from "../../components/dropdown/Dropdown";
import styles from "./checkoutForm.module.css";
import { Cities } from "../../Data/CityData";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { useState } from "react";

const CHECKOUT_FORM_URL = "/createCheckout";

const CheckoutForm = () => {
  const { category } = useParams();
  const { service } = useParams();

  const [childData, setChildData] = useState(""); // childData is used to get data from dropdown

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    serviceDate: "",
    address: "",
    note: "",
    phoneNumber: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(values);
    e.preventDefault();

    try {
      const response = await axios.post(
        CHECKOUT_FORM_URL,
        JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          serviceName: category,
          serviceDate: values.serviceDate,
          address: values.address,
          city: childData,
          note: values.note,
          phoneNumber: values.phoneNumber,
          serviceDesc: service,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      window.open(`${response.data.url}`);

      console.log(JSON.stringify(response));

      console.log(response);
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        alert("Professionals not available for selected location");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("something else is wrong");
      }
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.title}>Checkout Order</div>
          <div className={styles.content}>
            <form onSubmit={handleSubmit}>
              <div className={styles["user-details"]}>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="john Dear"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Phone Number</span>
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Service Date</span>
                  <input
                    name="serviceDate"
                    type="date"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Address</span>
                  <textarea
                    name="address"
                    onChange={onChange}
                    type="text"
                    placeholder="Enter your Address"
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>City</span>
                  <Dropdown
                    name="city"
                    selectedCity={(childData) => setChildData(childData)}
                    // onChange={onChange}
                    placeholder="Enter the City"
                    data={Cities}
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>Note</span>
                  <textarea
                    name="note"
                    onChange={onChange}
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
