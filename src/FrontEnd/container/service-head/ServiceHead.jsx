import ServiceHeadStyles from "./ServiceHead.module.css";
import { Link } from "react-router-dom";

export const ServiceHead = (props) => {
  return (
    <>
      <div className={ServiceHeadStyles.serviceHead_container}>
        <div className={ServiceHeadStyles.serviceHead_container_text}>
          <h2>{props.title}</h2>
          <p>{props.service_desc}</p>
        </div>
        <div className={ServiceHeadStyles.serviceHead_container_image}>
          <img src={props.img} alt="service_img" />
        </div>
      </div>
      <div className={ServiceHeadStyles.serviceHead_container_button}>
        <Link to={`/checkout/${props.category}/${props.title}`}>
          <button className="button">Book Service</button>
        </Link>
      </div>
    </>
  );
};
