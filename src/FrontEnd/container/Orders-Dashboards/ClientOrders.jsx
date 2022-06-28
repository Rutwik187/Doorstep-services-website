import React from "react";
import ClientOrderStyles from "./CommonStyles.module.css";

import mixer_grinder_repair from "../../assets/appliance_repair/mixer_grinder_repair.jpg";
import fan_repair from "../../assets/electrician/fan.jpg";
import pest_control from "../../assets/house_cleaning/pest_control.jpg";
import photographer from "../../assets/event_management/photography.jpg";

export const ClientOrders = () => {
  return (
    <div className={ClientOrderStyles.wrapper}>
      <Card
        img={mixer_grinder_repair}
        alt="img"
        title="Appliance Repair"
        description="Household Appliances"
        price="450"
        status="status: pending"
      />

      <Card
        img={fan_repair}
        alt="img"
        title="Appliance Repair"
        description="Fan Repair"
        price="500"
        status="status: pending"
      />
      <Card
        img={pest_control}
        alt="img"
        title="House Cleaning"
        description="Pest Control"
        price="300"
        status="status: Approved"
      />
      <Card
        img={photographer}
        alt="img"
        title="Event Management"
        description="Photography"
        price="600"
        status="status: completed"
      />
    </div>
  );
};

function Card(props) {
  return (
    <div className={ClientOrderStyles.card}>
      <img src={props.img} alt="img" className={ClientOrderStyles.card__img} />
      <div className={ClientOrderStyles.card__body}>
        <h5 className={ClientOrderStyles.card__title}>{props.title}</h5>
        <p className={ClientOrderStyles.card__description}>
          {props.description}
        </p>
        <p>{props.status}</p>
        <p className={ClientOrderStyles.card__price}>{props.price}</p>
        <button className="button">Work Completed</button>
      </div>
    </div>
  );
}
