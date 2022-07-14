import { useState } from "react";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./newProfessional.css";
import axios from "../../../../api/axios";

const NEW_PROFESSIONAL_URL = "/admin/createProfessional";

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
    console.log(email, password);
    e.preventDefault();

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

      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
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
              placeholder="john"
              onChange={onChange}
            />
          </div>
          <div className="newProfessionalItem">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Smith"
              onChange={onChange}
            />
          </div>
          <div className="newProfessionalItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              onChange={onChange}
            />
          </div>
          <div className="newProfessionalItem">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="+91 0000000000"
              onChange={onChange}
            />
          </div>
          <div className="newProfessionalItem">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="New York | USA"
              onChange={onChange}
            />
          </div>
          <div className="newProfessionalItem">
            <label>Service Name</label>
            <input
              type="text"
              name="serviceName"
              placeholder="Barber"
              onChange={onChange}
            />
          </div>
          <button className="newProfessionalButton">Create</button>
        </form>
      </div>
    </div>
  );
}
