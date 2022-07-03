import "./service.css";
import Chart from "../../../../components/admin-dashboard/chart/Chart";
import { serviceData } from "../../../../Data/dummyData";
import { Publish } from "@mui/icons-material";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";

export default function Service() {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="service">
        <div className="serviceTitleContainer">
          <h2 className="serviceTitle">service</h2>
        </div>
        <div className="serviceTop">
          <div className="serviceTopLeft">
            <Chart
              data={serviceData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </div>
          <div className="serviceTopRight">
            <div className="serviceInfoTop">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="serviceInfoImg"
              />
              <span className="serviceName">Apple Air pods</span>
            </div>
            <div className="serviceInfoBottom">
              <div className="serviceInfoItem">
                <span className="serviceInfoKey">id:</span>
                <span className="serviceInfoValue">123</span>
              </div>
              <div className="serviceInfoItem">
                <span className="serviceInfoKey">sales:</span>
                <span className="serviceInfoValue">5123</span>
              </div>
              <div className="serviceInfoItem">
                <span className="serviceInfoKey">active:</span>
                <span className="serviceInfoValue">yes</span>
              </div>
              <div className="serviceInfoItem">
                <span className="serviceInfoKey">in stock:</span>
                <span className="serviceInfoValue">no</span>
              </div>
            </div>
          </div>
        </div>
        <div className="serviceBottom">
          <form className="serviceForm">
            <div className="serviceFormLeft">
              <label>service Name</label>
              <input type="text" placeholder="Apple AirPod" />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="serviceFormRight">
              <div className="serviceUpload">
                <img
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="serviceUploadImg"
                />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="serviceButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
