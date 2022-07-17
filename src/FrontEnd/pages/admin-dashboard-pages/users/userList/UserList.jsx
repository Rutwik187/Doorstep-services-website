import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../../../Data/dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("user/getUser");
        setData(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error", err);
        }
      }
    };
    fetchUserData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 300,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.username}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "location",
      headerName: "Location",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userListContainer">
      <div className="sidebar-container">
        <Sidebar />
        <div className="userList">
          <DataGrid
            sx={{
              fontSize: "1.5rem",
            }}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
      <Link to="/SignUp">
        <button className="userAddButton">Create User</button>
      </Link>
    </div>
  );
}
