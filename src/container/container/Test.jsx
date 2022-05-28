import "./test.css";
import React, { useState } from "react";
// import Box from "@mui/material/Box";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

import { Data } from "../data";

export const Test = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

      <Modal
        title="Basic Modal"
        visible="false"
        onOk={handleClose}
        onCancel={handleClose}
      >
        <div class="services_container">
          <div class="items">
            <div class="items-head">
              <p>Appliance repair</p>
              <Button onClick={handleClose}>
                <GrClose size={15} fill="#6b7cff" />
              </Button>
            </div>
            <hr />

            <div class="items-body">
              <div class="items-body-content">
                <span>Web Usability Testing</span>
                <RiArrowRightSLine />
              </div>
              <div class="items-body-content">
                <span>Design of Everyday Things</span>
                <i class="fa fa-angle-right"></i>
              </div>
              <div class="items-body-content">
                <span>
                  Practical Empathy: For Collaboration & Creativity in Your Work
                </span>
                <i class="fa fa-angle-right"></i>
              </div>
              <div class="items-body-content">
                <span>About Face: The Essentials of Interaction Design</span>
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
