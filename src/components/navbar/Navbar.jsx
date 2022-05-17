import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/icons/logo.png";
import navbarStyles from "./navbar.module.css";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles.navbar_links_logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={navbarStyles.navbar_links}>
        <div className={navbarStyles.navbar_links_container}>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/Services">Services</Link>
          </p>
          <p>
            <Link to="/RegisterAsProfessional">Register As Professional</Link>
          </p>
          <p>
            <Link to="/ContactUs">Contact Us</Link>
          </p>
        </div>
      </div>
      <div className={navbarStyles.navbar_sign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={navbarStyles.navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${navbarStyles.navbar_menu_container} ${navbarStyles.scale_up_center}`}
          >
            <div className={navbarStyles.navbar_menu_container_links}>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/Services">Services</Link>
              </p>
              <p>
                <Link to="/RegisterAsProfessional">
                  Register As Professional
                </Link>
              </p>
              <p>
                <Link to="/ContactUs">Contact Us</Link>
              </p>
            </div>
            <div className={navbarStyles.navbar_menu_container_links_sign}>
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};
