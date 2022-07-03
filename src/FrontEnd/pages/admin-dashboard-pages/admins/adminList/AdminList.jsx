import "./adminList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { adminRows } from "../../../../Data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";

export default function AdminList() {
  const [data, setData] = useState(adminRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "admin",
      headerName: "admin",
      width: 300,
      renderCell: (params) => {
        return (
          <div>
            <img className="adminListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "role",
      headerName: "Role",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/" + params.row.id}>
              <button className="adminListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="adminListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="adminListContainer">
      <div className="sidebar-container">
        <Sidebar />

        <div className="adminList">
          <DataGrid
            sx={{
              fontSize: "1.5rem",
            }}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        </div>
      </div>
      <Link to="/newAdmin">
        <button className="adminAddButton">Create admin</button>
      </Link>
    </div>
  );
}
