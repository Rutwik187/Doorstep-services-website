import { categoriesData } from '../../Data/CategoriesData'
import Aos from "aos";
import "aos/dist/aos.css";
import servicesStyles from "../../components/services/Services.module.css";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";

export const ServicesCategories = () => {

    Aos.init({ duration: 1000 });
    return (
        <div className={servicesStyles.services_container}>
            <div className={servicesStyles.services_container_title}>
                <h4>Categories Of Services We Offer</h4>
                <h5>Explore the greatest our services.</h5>
            </div>
            <div className={servicesStyles.services_container_content}>
                {categoriesData.map((item) =>
                (
                    <div
                        key={item.id}
                        className={servicesStyles.services_container_content_item}
                        data-aos="zoom-in-up"
                    >
                        <Link to={"/categories/" + item.id}>

                            <img
                                className={servicesStyles.services_container_content_item_img}
                                src={item.img}
                                alt={item.desc}
                            />
                            <div
                                className={
                                    servicesStyles.services_container_content_item_label
                                }
                            >
                                <GoPrimitiveDot fill="#6b7cff" size={20} />
                                <p>{item.desc}</p>
                            </div>
                        </Link>
                    </div>
                )
                )}
            </div>
        </div>
    );
};
