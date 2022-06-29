import React from "react";
import SalesAnalysisStyles from "./SalesAnalysis.module.css";
import { GoGraph } from "react-icons/go";
import { MdManageAccounts, MdNotificationsActive } from "react-icons/md";

export const SalesAnalysis = () => {
  return (
    <div>
      <div className={SalesAnalysisStyles.SaleAnalysisContainer}>
        <div className={SalesAnalysisStyles.SaleAnalysisContainer_content}>
          <h2>Analyze your sales and Performance</h2>
          <p>
            You can analyze your sales and performance by using the charts and
            make the decisions accordingly.
          </p>
        </div>
        <div className={SalesAnalysisStyles.SaleAnalysisContainer_list}>
          <div className={SalesAnalysisStyles.SaleAnalysisContainer_list_item}>
            <div
              className={
                SalesAnalysisStyles.SaleAnalysisContainer_list_item_icon
              }
            >
              <GoGraph size={30} fill="var(--icon-color)" />
            </div>
            <div
              className={
                SalesAnalysisStyles.SaleAnalysisContainer_list_item_content
              }
            >
              <h5>Sales Tracking</h5>
              <p>
                Track your sales and analyze your performance by using the
                charts.
              </p>
            </div>
          </div>
          <div className={SalesAnalysisStyles.SaleAnalysisContainer_list_item}>
            <div
              className={
                SalesAnalysisStyles.SaleAnalysisContainer_list_item_icon
              }
            >
              <MdManageAccounts size={30} fill="var(--icon-color)" />
            </div>
            <div
              className={
                SalesAnalysisStyles.SaleAnalysisContainer_list_item_content
              }
            >
              <h5>Freedom to choose client</h5>
              <p>You can choose to accept or reject the client request.</p>
            </div>
          </div>
          <div className={SalesAnalysisStyles.SaleAnalysisContainer_list_item}>
            <div
              className={
                SalesAnalysisStyles.SaleAnalysisContainer_list_item_icon
              }
            >
              <MdNotificationsActive size={30} fill="var(--icon-color)" />
            </div>
            <div
              className={
                SalesAnalysisStyles.SaleAnalysisContainer_list_item_content
              }
            >
              <h5>Notifications</h5>
              <p>
                Get notified instantly about the status and requests from the
                client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
