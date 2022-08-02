import { useState } from "react";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./newProfessional.css";
import axios from "../../../../api/axios";

const NEW_PROFESSIONAL_URL = "/professional/createProfessional";

export default function NewProfessional() {
  const [values, setValues] = useState({
    username: "",
    fullName: "",
    email: "",
    serviceName: "",
    location: "",
    phone: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      const response = await axios.post(
        NEW_PROFESSIONAL_URL,
        JSON.stringify({
          username: values.username,
          fullName: values.fullName,
          email: values.email,
          serviceName: values.serviceName,
          location: values.location,
          phone: values.phone,
          password: values.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      alert(`${values.username} has been added to the database`);

      console.log(JSON.stringify(response));

      console.log(response);
    } catch (err) {
      if (!err?.response) {
        alert("No Server Response");
      } else if (err.response?.status === 400) {
        alert("Service Does Not Exist");
      } else if (err.response?.status === 409) {
        alert("Username, Phone or Email already exists!");
      } else if (err.response?.status === 403) {
        alert("You are Unauthorized");
      } else {
        alert("Fail to Create Admin");
      }
    }
  };

  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="newProfessional">
        <h2 className="newProfessionalTitle">New Professional</h2>
        <form onSubmit={handleSubmit} className="newProfessionalForm">
          <div className="newProfessionalItem">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={onChange}
              required
            />
          </div>
          <div className="newProfessionalItem">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              onChange={onChange}
              required
            />
          </div>
          <div className="newProfessionalItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={onChange}
              required
            />
          </div>
          <div className="newProfessionalItem">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={onChange}
              required
            />
          </div>
          <div className="newProfessionalItem">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              onChange={onChange}
              required
            />
          </div>
          <div className="newProfessionalItem">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter City"
              onChange={onChange}
              required
            />
          </div>
          <div className="newProfessionalItem">
            <label>Service Name</label>
            <input
              type="text"
              name="serviceName"
              placeholder="Enter Service Name"
              onChange={onChange}
              required
            />
          </div>
          <button className="newProfessionalButton">Create</button>
        </form>
      </div>
    </div>
  );
}
