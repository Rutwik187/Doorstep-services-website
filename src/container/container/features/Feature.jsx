import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Feature.module.css";
import featureStyels from "./Feature.module.css";
import { featureItems } from "../../data";

export const Feature = () => {
  Aos.init({ duration: 1000 });
  return (
    <section className="section_margin">
      <div className={featureStyels.container}>
        <div className={featureStyels.title}>
          <h4>High Quality</h4>
          <h5>We have the Best Solution for Every Household problems</h5>
        </div>
        <div className={featureStyels.feature_container}>
          {featureItems.map((item) => (
            <div data-aos="zoom-in-up" className={featureStyels.feature_item}>
              <div className={featureStyels.feature_item_icon}>
                <img src={item.icon} alt="{item.title}" />
              </div>
              <div className={featureStyels.feature_item_title}>
                <h3>{item.title}</h3>
              </div>
              <div className={featureStyels.feature_item_desc}>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
