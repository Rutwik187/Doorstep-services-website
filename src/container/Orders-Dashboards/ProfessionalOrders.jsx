import React from "react";
import ClientOrderStyles from "./CommonStyles.module.css";

export const ProfessionalOrders = () => {
  return (
    <div className={ClientOrderStyles.container}>
      <div className={ClientOrderStyles.box}>
        <h4>Orders</h4>
        <div className={ClientOrderStyles.orderDetails}>
          <h5>Client Name: Jessica Trump</h5>
          <h5>Phone No.: 8659745321</h5>
          <h5>Service Price: $100</h5>
          <h5>
            Address: Plot no. 53, Sunder Mohan Park, Akurdi - 411522, Pune
          </h5>
          <h5>Service Name: Electrician</h5>
          <h5>Service Description: Fan Repairing</h5>
        </div>
        <button className="button">Approve</button>
        <button className="button">Reject</button>
      </div>
    </div>
  );
};
