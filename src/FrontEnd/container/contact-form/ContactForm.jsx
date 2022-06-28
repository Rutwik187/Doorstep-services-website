import { Link } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactFormStyles from "./ContactForm.module.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1faugds",
        "template_x2b4vud",
        form.current,
        "Q_s4xBfFb3XW36xQA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={ContactFormStyles.contact}>
      <div className={ContactFormStyles.contact_box}>
        <div className={ContactFormStyles.contact_links}>
          <h2>CONTACT US</h2>
          <div className={ContactFormStyles.links}>
            <div className={ContactFormStyles.link}>
              <Link to="/">
                <img
                  src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                  alt="linkedin"
                />
              </Link>
            </div>
            <div className={ContactFormStyles.link}>
              <Link to="/">
                <img
                  src="https://i.postimg.cc/YCV2QBJg/github.png"
                  alt="github"
                />
              </Link>
            </div>
            <div className={ContactFormStyles.link}>
              <Link to="/">
                <img
                  src="https://i.postimg.cc/W4Znvrry/codepen.png"
                  alt="codepen"
                />
              </Link>
            </div>
            <div className={ContactFormStyles.link}>
              <Link to="/">
                <img
                  src="https://i.postimg.cc/NjLfyjPB/email.png"
                  alt="email"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={ContactFormStyles.contact_form_wrapper}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={ContactFormStyles.form_item}>
              <input type="text" name="user_name" required />
              <label>Name:</label>
            </div>
            <div className={ContactFormStyles.form_item}>
              <input type="email" name="user_email" required />
              <label>Email:</label>
            </div>
            <div className={ContactFormStyles.form_item}>
              <textarea className="" name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button
              type="submit"
              value="Send"
              className={ContactFormStyles.submit_btn}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
