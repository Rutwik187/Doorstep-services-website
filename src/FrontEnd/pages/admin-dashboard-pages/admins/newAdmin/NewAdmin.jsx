import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./newAdmin.css";
import axios from "../../../../api/axios";
import { useState } from "react";

const NEW_ADMIN_URL = "/admin/createAdmin";

export default function NewAdmin() {
  const [values, setValues] = useState({
    username: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    // position: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(values);
    e.preventDefault();

    try {
      const response = await axios.post(
        NEW_ADMIN_URL,
        JSON.stringify({
          username: values.username,
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          password: values.password,
          // position: values.position,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response));

      console.log(response);
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("something else is wrong");
      }
    }
  };

  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="newAdmin">
        <h2 className="newAdminTitle">New Admin</h2>
        <form onSubmit={handleSubmit} className="newAdminForm">
          <div className="newAdminItem">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="john"
              onChange={onChange}
            />
          </div>
          <div className="newAdminItem">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Smith"
              onChange={onChange}
            />
          </div>
          <div className="newAdminItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              onChange={onChange}
            />
          </div>
          <div className="newAdminItem">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              onChange={onChange}
            />
          </div>
          <div className="newAdminItem">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="+91 0000000000"
              onChange={onChange}
            />
          </div>

          {/* <div className="newAdminItem">
          <label>Position</label>
            <input
              type="text"
              name="position"
              placeholder="manager"
              onChange={onChange}
            />
          </div> */}
          <button className="newAdminButton">Create</button>
        </form>
      </div>
    </div>
  );
}
