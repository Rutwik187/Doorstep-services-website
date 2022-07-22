import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./newService.css";
import axios from "../../../../api/axios";
import { useState } from "react";

export default function NewService() {
  const SERVICE_URL = "/admin/createService";

  const [values, setValues] = useState({
    name: "",
    active: "true",
    price: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(values);
    e.preventDefault();

    try {
      const response = await axios.post(
        SERVICE_URL,
        JSON.stringify({
          name: values.name,
          active: "true",
          price: values.price,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response));
      console.log(response);

      setValues({
        name: "",
        active: "true",
        price: "",
      });

      alert(`${values.name} has been added to the database`);
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        alert("Service already exists");
      } else if (err.response?.status === 403) {
        alert("You are Unauthorized to perform this action");
      } else {
        alert("Unable to Create Service");
      }
    }
  };

  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="newService">
        <h2 className="addServiceTitle">New Category</h2>
        <form onSubmit={handleSubmit} className="addServiceForm">
          <div className="addServiceItem">
            <label>Name</label>
            <input
              name="name"
              onChange={onChange}
              type="text"
              placeholder="Electrician"
              required
            />
          </div>
          <div className="addServiceItem">
            <label>Active</label>
            <select onChange={onChange} name="active" id="active">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="addServiceItem">
            <label>Price</label>
            <input
              name="price"
              onChange={onChange}
              type="number"
              placeholder="500"
              required
            />
          </div>
          <button className="addServiceButton">Create</button>
        </form>
      </div>
    </div>
  );
}
