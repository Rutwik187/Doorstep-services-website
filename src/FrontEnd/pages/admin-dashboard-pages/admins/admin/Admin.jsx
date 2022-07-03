import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./admin.css";

export default function Admin() {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="admin">
        <div className="adminTitleContainer">
          <h2 className="adminTitle">Edit admin</h2>
        </div>
        <div className="adminContainer">
          <div className="adminShow">
            <div className="adminShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="adminShowImg"
              />
              <div className="adminShowTopTitle">
                <span className="ShowadminName">Anna Becker</span>
                <span className="ShowadminTitle">Software Engineer</span>
              </div>
            </div>
            <div className="adminShowBottom">
              <span className="adminShowTitle">Account Details</span>
              <div className="adminShowInfo">
                <PermIdentity className="adminShowIcon" />
                <span className="adminShowInfoTitle">annabeck99</span>
              </div>
              <div className="adminShowInfo">
                <CalendarToday className="adminShowIcon" />
                <span className="adminShowInfoTitle">10.12.1999</span>
              </div>
              <span className="adminShowTitle">Contact Details</span>
              <div className="adminShowInfo">
                <PhoneAndroid className="adminShowIcon" />
                <span className="adminShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="adminShowInfo">
                <MailOutline className="adminShowIcon" />
                <span className="adminShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="adminShowInfo">
                <LocationSearching className="adminShowIcon" />
                <span className="adminShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="adminUpdate">
            <span className="adminUpdateTitle">Edit</span>
            <form className="adminUpdateForm">
              <div className="adminUpdateLeft">
                <div className="adminUpdateItem">
                  <label>adminname</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="adminUpdateInput"
                  />
                </div>
                <div className="adminUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="adminUpdateInput"
                  />
                </div>
                <div className="adminUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="adminUpdateInput"
                  />
                </div>
                <div className="adminUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="adminUpdateInput"
                  />
                </div>
                <div className="adminUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="adminUpdateInput"
                  />
                </div>
              </div>
              <div className="adminUpdateRight">
                <div className="adminUpdateUpload">
                  <img
                    className="adminUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="adminUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="adminUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
