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
            <Link to="/Categories">Categories</Link>
          </p>
          <p>
            <Link to="/RegisterAsProfessional">Register As Professional</Link>
          </p>
          <p>
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          </p>
          <p>
            <Link to="/ContactUs">Contact Us</Link>
          </p>
        </div>
      </div>
      <div className={navbarStyles.navbar_sign}>
        <p>
          <Link to="/SignIn">Sign in</Link>
        </p>
        <Link to="/SignUp">
          <button type="button">Sign up</button>
        </Link>
      </div>
      <div className={navbarStyles.navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={30}
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
                <Link to="/Categories">Categories</Link>
              </p>
              <p>
                <Link to="/RegisterAsProfessional">
                  Register As Professional
                </Link>
              </p>
              <p>
                <Link to="/admin-dashboard">Admin Dashboard</Link>
              </p>
              <p>
                <Link to="/ContactUs">Contact Us</Link>
              </p>
            </div>
            <div className={navbarStyles.navbar_menu_container_links_sign}>
              <Link to="/SignIn">
                <p>Sign in</p>
              </Link>
              <Link to="/SignUp">
                <button type="button">Sign up</button>
              </Link>
            </div>
            <div className={navbarStyles.circular_close_button}>
              <RiCloseLine
                color="#ffffff"
                size={35}
                onClick={() => setToggleMenu(false)}
              />
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};
