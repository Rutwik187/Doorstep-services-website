import React, { useState } from "react";
import { Data } from "../../data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import AccordionStyles from "./Accordion.module.css";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <div className={AccordionStyles.AccordionSection}>
        <div className={AccordionStyles.AccordionSection_header}>
          <h2>Frequestly Asked Questions</h2>
          <button className="button">Contact Us</button>
        </div>

        <div className={AccordionStyles.Accordion_FAQs}>
          {Data.map((item, index) => {
            return (
              <>
                <div
                  className={AccordionStyles.Wrap}
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <div className={AccordionStyles.Question}>
                    <h5>{item.question}</h5>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </div>

                  {clicked === index ? (
                    <div className={AccordionStyles.Dropdown}>
                      <p>{item.answer}</p>
                    </div>
                  ) : null}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;
