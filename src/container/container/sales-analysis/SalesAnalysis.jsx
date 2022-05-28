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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            perspiciatis!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
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
              <h5>Sales Tracking</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
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
              <h5>Sales Tracking</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
