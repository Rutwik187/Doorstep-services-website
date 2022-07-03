import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./newService.css";

export default function NewService() {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="newService">
        <h1 className="addServiceTitle">New Service</h1>
        <form className="addServiceForm">
          <div className="addServiceItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="addServiceItem">
            <label>Name</label>
            <input type="text" placeholder="Apple Airpods" />
          </div>
          <div className="addServiceItem">
            <label>Stock</label>
            <input type="text" placeholder="123" />
          </div>
          <div className="addServiceItem">
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="addServiceButton">Create</button>
        </form>
      </div>
    </div>
  );
}
