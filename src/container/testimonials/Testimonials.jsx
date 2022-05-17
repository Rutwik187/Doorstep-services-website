import React from "react";
import testimonialsStyles from "./Testimonials.module.css";
import "./Testimonials.module.css";
import { FaQuoteRight } from "react-icons/fa";
import { testimonials } from "../../data";

export const Testimonials = () => {
  return (
    <section>
      <div className={testimonialsStyles.container}>
        <h4>Testimonials</h4>
        <h5>The stunning results our customers have experienced</h5>
        <div className={testimonialsStyles.content}>
          {testimonials.map((testimonial) => {
            return (
              <div
                className={testimonialsStyles.testimonial_card}
                key={testimonial.id}
              >
                <div className={testimonialsStyles.text}>
                  {testimonial.comment}
                  <FaQuoteRight className={testimonialsStyles.quote} />
                </div>

                <div className={testimonialsStyles.footer}>
                  <div className={testimonialsStyles.image}>
                    <img src={testimonial.avatar} alt="user" />
                  </div>
                  <h2 className={testimonialsStyles.person}>
                    {testimonial.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
