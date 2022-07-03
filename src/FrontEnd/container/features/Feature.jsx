import React from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import "./Feature.module.css";
import featureStyles from "./Feature.module.css";
import { featureItems } from "../../Data/UI-Data";

export const Feature = () => {
  // Aos.init({ duration: 800 });
  return (
    <section className="section_margin">
      <div className={featureStyles.container}>
        <div className={featureStyles.title}>
          <h4>High Quality</h4>
          <h5>We have the Best Solution for Every Household problems</h5>
        </div>
        <div className={featureStyles.feature_container}>
          {featureItems.map((item) => (
            <div
              key={item.id}
              // data-aos="zoom-in-up"
              className={featureStyles.feature_item}
            >
              <div className={featureStyles.feature_item_icon}>
                <img src={item.icon} alt="{item.title}" />
              </div>
              <div className={featureStyles.feature_item_title}>
                <h3>{item.title}</h3>
              </div>
              <div className={featureStyles.feature_item_desc}>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
