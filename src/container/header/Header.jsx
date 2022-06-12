import React from "react";
import headerStyles from "./Header.module.css";
import { GoLocation, GoSearch } from "react-icons/go";
import { categoriesData } from "../../data";
import { Link } from "react-router-dom";
// import { Test } from "../Test";

export const Header = () => {
  // const [show, setShow] = useState(false);

  // const onclickHandler = (item) => {
  //   setShow(true);
  // };

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

      <div className={headerStyles.categories}>
        <h3>Categories</h3>

        <div className={headerStyles.categories_container}>
          {categoriesData.map((item) => (
            <Link to={"/categories/" + item.id}>
              <div
                category-id={item.id}
                // onClick={() => onclickHandler(item)}
                className={headerStyles.categories_container_item}
              >
                <img src={item.icon_img} alt={item.desc} />
                <p>{item.desc}</p>
              </div>
            </Link>
          ))}
          {/* <Test showModal={show} closeModal={() => setShow(false)} /> */}
        </div>
      </div>
    </div>
  );
};
