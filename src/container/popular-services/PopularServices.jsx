import { Services } from "../../components/services/Services";
import { popularServices } from "../../Data/ServicesData";

export const PopularServices = () => {
  return (
    <Services
      servicesProps={popularServices}
      // category={popularServices.category}
      title={"Most Popular Services"}
      tagLine={"Explore the greatest our services."}
    />
  );
};
