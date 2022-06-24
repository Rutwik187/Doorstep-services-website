import React from "react";
import headerStyles from "./Header.module.css";
import { GoLocation } from "react-icons/go";
import { categoriesData } from "../../data";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/searchBar/SearchBar";
import allServices from "./ServicesImports";
import { Cities } from "../../data";

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
        <SearchBar placeholder="Search the Location" data={Cities} />

        <SearchBar placeholder="Search the Service" data={allServices} />
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
