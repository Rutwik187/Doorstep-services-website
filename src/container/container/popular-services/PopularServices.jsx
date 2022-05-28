import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import servicesStyles from "./PopularServices.module.css";
import { Outlet, Link } from "react-router-dom";
import { popularServices } from "../../data";
import { GoPrimitiveDot } from "react-icons/go";

export const PopularServices = () => {
  Aos.init({ duration: 1000 });
  return (
    <div className={servicesStyles.services_container}>
      <div className={servicesStyles.services_container_title}>
        <h4>We are Proud of Our Services</h4>
        <h5>Explore the greatest our services.</h5>
      </div>
      <div className={servicesStyles.services_container_content}>
        {popularServices.map((popularServices) => {
          return (
            <Link to="/ServicesCheckout">
              <div
                className={servicesStyles.services_container_content_item}
                key={popularServices.id}
                onClick={() => {}}
                data-aos="zoom-in-up"
              >
                <img
                  className={servicesStyles.services_container_content_item_img}
                  src={popularServices.image}
                  alt={popularServices.title}
                />
                <div
                  className={
                    servicesStyles.services_container_content_item_label
                  }
                >
                  <GoPrimitiveDot fill="#6b7cff" size={20} />
                  <p>{popularServices.title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};
