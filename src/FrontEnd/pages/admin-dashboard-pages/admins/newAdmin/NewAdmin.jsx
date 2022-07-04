import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./newAdmin.css";

export default function NewAdmin() {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="newAdmin">
        <h2 className="newAdminTitle">New Admin</h2>
        <form className="newAdminForm">
          <div className="newAdminItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newAdminItem">
            <label>Full Name</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="newAdminItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newAdminItem">
            <label>Password</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className="newAdminItem">
            <label>Phone</label>
            <input type="text" placeholder="+91 0000000000" />
          </div>

          <div className="newAdminItem">
            <label>Position</label>
            <input type="text" placeholder="Manager" />
          </div>
          <button className="newAdminButton">Create</button>
        </form>
      </div>
    </div>
  );
}
