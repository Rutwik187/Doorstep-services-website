import ServiceHeadStyles from "./ServiceHead.module.css";
// import HouseCleaning from "../../assets/Images/House-cleaning.jpg";
import React from "react";

export const ServiceHead = (props) => {
  return (
    <>
      <div className={ServiceHeadStyles.serviceHead_container}>
        <div className={ServiceHeadStyles.serviceHead_container_text}>
          <h2>{props.title}</h2>
          <p>{props.service_desc}</p>
        </div>
        <div className={ServiceHeadStyles.serviceHead_container_image}>
          <img src={props.img} alt="service_img" />
        </div>
      </div>
      <div className={ServiceHeadStyles.serviceHead_container_button}>
        <button className="button">Book Service</button>
      </div>
    </>
  );
};
