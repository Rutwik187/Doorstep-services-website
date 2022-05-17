import React from "react";
import { stepsData } from "../../data";
import stepsStyles from "./Steps.module.css";

export const Steps = () => {
  return (
    <div className={stepsStyles.steps}>
      <h4>Fixing made easy with Fixerr.</h4>
      <h5>We will fix anything in your home with few easy steps.</h5>
      <div className={stepsStyles.steps_container}>
        {stepsData.map((data) => (
          <div className={stepsStyles.steps_item} key={data.id}>
            <div className={stepsStyles.steps_item_content}>
              <span className={stepsStyles.tag}>{data.step_no}</span>
              <p>{data.text}</p>
              <span className={stepsStyles.circle} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
