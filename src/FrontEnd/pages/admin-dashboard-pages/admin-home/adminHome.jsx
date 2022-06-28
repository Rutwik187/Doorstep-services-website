import Chart from "../../../components/admin-dashboard/chart/Chart";
import Sidebar from "../../../components/admin-dashboard/sidebar/Sidebar";
import FeaturedInfo from "../../../components/admin-dashboard/featuredInfo/FeaturedInfo";
import "./adminHome.css";
import { userData } from "../../../Data/dummyData";
import WidgetSm from "../../../components/admin-dashboard/widgetSm/WidgetSm";
import WidgetLg from "../../../components/admin-dashboard/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}
