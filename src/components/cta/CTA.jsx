import React from "react";
import ctaStyles from "./CTA.module.css";

export const CTA = () => {
  return (
    <section>
      <div className={ctaStyles.cta_container}>
        <h2>Are you ready to grow your business with us?</h2>
        <h5>
          You are just few clicks away from making your service more accessible
        </h5>
        <button className="button">Register as Professional</button>
      </div>
    </section>
  );
};
