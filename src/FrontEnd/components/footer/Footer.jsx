import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Categories">Categories</Link>
              </li>
              <li>
                <Link to="/RegisterAsProfessional">
                  Register As Professional
                </Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer_col}>
            <h5>Resources</h5>
            <ul>
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">returns</Link>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer_col}>
            <h5>Services</h5>
            <ul>
              <li>
                <Link to="/categories/appliance_repair"> Appliance Repair</Link>
              </li>
              <li>
                <Link to="/categories/electrician">Electrician</Link>
              </li>
              <li>
                <Link to="/categories/plumbing">Plumbing</Link>
              </li>
              <li>
                <Link to="/categories/house_cleaning"> House Cleaning</Link>
              </li>
              <li>
                <Link to="/categories/beauty_and_spa"> Beauty and Spa</Link>
              </li>
              <li>
                <Link to="/categories/online_instructor">
                  Online Instructor
                </Link>
              </li>
              <li>
                <Link to="/categories/event_management"> Event Management</Link>
              </li>
              <li>
                <Link to="/categories/business"> Business</Link>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer_col}>
            <h5>follow us</h5>
            <div className={footerStyles.social_links}>
              <Link to="/">
                <FaFacebook size={40} fill="#e0e4fc" />
              </Link>
              <Link to="/">
                <FaInstagram size={40} fill="#e0e4fc" />
              </Link>
              <Link to="/">
                <FaLinkedinIn size={40} fill="#e0e4fc" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
