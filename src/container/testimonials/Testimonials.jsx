import testimonialsStyles from "./Testimonials.module.css";
import { FaQuoteRight } from "react-icons/fa";
import { testimonials } from "../../Data/UI-Data";
import React from "react";

// for swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const Testimonials = () => {
  return (
    <>
      <section>
        <div className={testimonialsStyles.container}>
          <h4>Testimonials</h4>
          <h5>The stunning results our customers have experienced</h5>
          <div
            className={`${testimonialsStyles.content} ${testimonialsStyles.testimonials_large_screen}`}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={testimonialsStyles.testimonial_card}
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
            ))}
          </div>

          <div
            className={`${testimonialsStyles.content} ${testimonialsStyles.testimonials_mobile_screen}`}
          >
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.swiperId}>
                  <div className={testimonialsStyles.testimonial_card}>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
