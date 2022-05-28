import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import footerStyles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.gradient}></div>
        <div className={footerStyles.row}>
          <div className={footerStyles.footer_col}>
            <h5>Pages</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Register as a Professional</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer_col}>
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer_col}>
            <h5>Services</h5>
            <ul>
              <li>
                <a href="#">Beauty and Spa</a>
              </li>
              <li>
                <a href="#">Electrician</a>
              </li>
              <li>
                <a href="#">Event Management</a>
              </li>
              <li>
                <a href="#">Appliance Repair</a>
              </li>
              <li>
                <a href="#">House Cleaning</a>
              </li>
              <li>
                <a href="#">Online Instructor</a>
              </li>
              <li>
                <a href="#">Taxes</a>
              </li>
              <li>
                <a href="#">Plumbing</a>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer_col}>
            <h5>follow us</h5>
            <div className={footerStyles.social_links}>
              <a href="#">
                <FaFacebook size={40} fill="#e0e4fc" />
              </a>
              <a href="#">
                <FaInstagram size={40} fill="#e0e4fc" />
              </a>
              <a href="#">
                <FaLinkedinIn size={40} fill="#e0e4fc" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
