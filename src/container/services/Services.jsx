import React from "react";
import servicesStyles from "./Services.module.css";
import { services } from "../../data";
import { GoPrimitiveDot } from "react-icons/go";

export const Services = () => {
  return (
    <div className={servicesStyles.services_container}>
      <div className={servicesStyles.services_container_title}>
        <h4>We are Proud of Our Services</h4>
        <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
      </div>
      <div className={servicesStyles.services_container_content}>
        {services.map((service) => {
          return (
            <div
              className={servicesStyles.services_container_content_item}
              key={service.id}
            >
              <img
                className={servicesStyles.services_container_content_item_img}
                src={service.image}
                alt={service.title}
              />
              <div
                className={servicesStyles.services_container_content_item_lable}
              >
                <GoPrimitiveDot fill="#6b7cff" size={20} />
                <p>{service.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
