import "./test.css";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { RiArrowRightSLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

// import { Data } from "../data";

export const Test = (props) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.showModal}
        onClose={props.closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.showModal}>
          <Box class="services_container">
            <div class="items">
              <div class="items-head">
                <p>Appliance repair</p>
                <Button onClick={props.closeModal}>
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
                    Practical Empathy: For Collaboration & Creativity in Your
                    Work
                  </span>
                  <i class="fa fa-angle-right"></i>
                </div>
                <div class="items-body-content">
                  <span>About Face: The Essentials of Interaction Design</span>
                  <i class="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
