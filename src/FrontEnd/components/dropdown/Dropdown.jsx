import * as React from "react";
import styles from "./dropdown.module.css";
import { Cities } from "../../Data/CityData";

export const Dropdown = (props) => {
  const [value, setValue] = React.useState("Mumbai");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  props.selectedCity(value);

  return (
    <div>
      <label className={styles.Dropdown}>
        <select value={value} onChange={handleChange}>
          {Cities.map((option) => (
            <option key={option.desc} value={option.desc}>
              {option.desc}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
