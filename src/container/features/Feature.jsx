import React from "react";
import "./Feature.module.css";
import featureStyels from "./Feature.module.css";
import { featureItems } from "../../data";

export const Feature = () => {
  return (
    <section className="section_margin">
      <div className={featureStyels.container}>
        <h4>High Quality</h4>
        <h5>We have the Best Solution for Every Household problems</h5>
        <div className={featureStyels.feature_container}>
          {featureItems.map((item) => (
            <div className={featureStyels.feature_item}>
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
