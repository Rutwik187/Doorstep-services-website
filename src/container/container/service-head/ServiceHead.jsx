import ServiceHeadStyles from "./ServiceHead.module.css";
import HouseCleaning from "../../assets/Images/House-cleaning.jpg";
import React from "react";

export const ServiceHead = () => {
  return (
    <>
      <div className={ServiceHeadStyles.serviceHead_container}>
        <div className={ServiceHeadStyles.serviceHead_container_text}>
          <h2>Home Cleaning Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className={ServiceHeadStyles.serviceHead_container_image}>
          <img src={HouseCleaning} alt="service_img" />
        </div>
      </div>
      <div className={ServiceHeadStyles.serviceHead_container_button}>
        <button className="button">Book Service</button>
      </div>
    </>
  );
};
