import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import "./professional.css";

export default function Professional() {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="professional">
        <div className="professionalTitleContainer">
          <h2 className="professionalTitle">Edit professional</h2>
        </div>
        <div className="professionalContainer">
          <div className="professionalShow">
            <div className="professionalShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="professionalShowImg"
              />
              <div className="professionalShowTopTitle">
                <span className="ShowProfessionalName">Anna Becker</span>
                <span className="ShowProfessionalTitle">Software Engineer</span>
              </div>
            </div>
            <div className="professionalShowBottom">
              <span className="professionalShowTitle">Account Details</span>
              <div className="professionalShowInfo">
                <PermIdentity className="professionalShowIcon" />
                <span className="professionalShowInfoTitle">annabeck99</span>
              </div>
              <div className="professionalShowInfo">
                <CalendarToday className="professionalShowIcon" />
                <span className="professionalShowInfoTitle">10.12.1999</span>
              </div>
              <span className="professionalShowTitle">Contact Details</span>
              <div className="professionalShowInfo">
                <PhoneAndroid className="professionalShowIcon" />
                <span className="professionalShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="professionalShowInfo">
                <MailOutline className="professionalShowIcon" />
                <span className="professionalShowInfoTitle">
                  annabeck99@gmail.com
                </span>
              </div>
              <div className="professionalShowInfo">
                <LocationSearching className="professionalShowIcon" />
                <span className="professionalShowInfoTitle">
                  New York | USA
                </span>
              </div>
            </div>
          </div>
          <div className="professionalUpdate">
            <span className="professionalUpdateTitle">Edit</span>
            <form className="professionalUpdateForm">
              <div className="professionalUpdateLeft">
                <div className="professionalUpdateItem">
                  <label>professionalname</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="professionalUpdateInput"
                  />
                </div>
                <div className="professionalUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="professionalUpdateInput"
                  />
                </div>
                <div className="professionalUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="professionalUpdateInput"
                  />
                </div>
                <div className="professionalUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="professionalUpdateInput"
                  />
                </div>
                <div className="professionalUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="professionalUpdateInput"
                  />
                </div>
              </div>
              <div className="professionalUpdateRight">
                <div className="professionalUpdateUpload">
                  <img
                    className="professionalUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="professionalUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="professionalUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
