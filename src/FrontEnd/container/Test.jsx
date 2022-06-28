import "./test.css";
import { Services } from "../data";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { RiArrowRightSLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

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
          <Box className="services_container">
            <div className="items">
              <div className="items-head">
                <p>toto</p>
                <Button onClick={props.closeModal}>
                  <GrClose size={15} fill="#6b7cff" />
                </Button>
              </div>
              <hr />
              <div className="items-body">
                <div className="items-body-content">
                  <span>{props.callOnClick}</span>
                  <RiArrowRightSLine />
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
