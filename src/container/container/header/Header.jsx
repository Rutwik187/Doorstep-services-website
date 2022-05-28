import React, { useState } from "react";
import headerStyles from "./Header.module.css";
import { GoLocation, GoSearch } from "react-icons/go";
import { Catagories } from "../../data";
// import { Services } from "../../data";
import { Test } from "../Test";

export const Header = () => {
  const [show, setShow] = useState(false);

  const showModelOnClickHandler = () => {
    setShow(!show);
  };

  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.title}>
        <h1>Services at the Doorstep</h1>
        <h5>We Focus on Customer Satisfaction</h5>
      </div>

      <div className={headerStyles.inputBoxes}>
        <div className={headerStyles.gradient}></div>
        <div
          className={`${headerStyles.input_box} ${headerStyles.location_input_box} `}
        >
          <GoLocation fill="#757575" size={27} />
          <input type="text" placeholder="Enter the City" />
        </div>
        <div
          className={`${headerStyles.input_box} ${headerStyles.service_input_box}`}
        >
          <GoSearch fill="#757575" size={27} />
          <input type="text" placeholder="Enter the Service" />
          <button className={headerStyles.header_search_button}>Search</button>
        </div>
      </div>

      <div className={headerStyles.catagories}>
        <h3>Catagories</h3>
        <div className={headerStyles.catagories_container}>
          {Catagories.map((item) => (
            <div
              onClick={showModelOnClickHandler}
              className={headerStyles.catagories_container_item}
            >
              <img src={item.img} key={item.id} alt={item.desc} />
              <p>{item.desc}</p>
            </div>
          ))}
          {show ? <Test /> : null}
        </div>
      </div>
    </div>
  );
};
