import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./newProfessional.css";

export default function NewProfessional() {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="newProfessional">
        <h2 className="newProfessionalTitle">New Professional</h2>
        <form className="newProfessionalForm">
          <div className="newProfessionalItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newProfessionalItem">
            <label>Full Name</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="newProfessionalItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newProfessionalItem">
            <label>Phone</label>
            <input type="text" placeholder="+91 0000000000" />
          </div>
          <div className="newProfessionalItem">
            <label>Location</label>
            <input type="text" placeholder="New York | USA" />
          </div>
          <div className="newProfessionalItem">
            <label>Service Name</label>
            <input type="text" placeholder="Barber" />
          </div>
          <button className="newProfessionalButton">Create</button>
        </form>
      </div>
    </div>
  );
}
