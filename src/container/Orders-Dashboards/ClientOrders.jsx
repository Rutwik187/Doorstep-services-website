import React from "react";
import ClientOrderStyles from "./CommonStyles.module.css";

export const ClientOrders = () => {
  return (
    <div className={ClientOrderStyles.container}>
      <div className={ClientOrderStyles.box}>
        <h4>Orders</h4>
        <div className={ClientOrderStyles.orderDetails}>
          <h5>Service Name: Electrician</h5>
          <h5>Service Price: $100</h5>
          <h5>Service Description: Fan Repairing</h5>
          <h5>Service Status: Pending</h5>
        </div>
        <button className="button">Work is done</button>
      </div>
    </div>
  );
};
