import "./professionalList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { professionalRows } from "../../../../Data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";

export default function ProfessionalList() {
  const [data, setData] = useState(professionalRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "professional",
      headerName: "Professional",
      width: 300,
      renderCell: (params) => {
        return (
          <div>
            <img
              className="professionalListImg"
              src={params.row.avatar}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "role",
      headerName: "Role",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/professional/" + params.row.id}>
              <button className="professionalListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="professionalListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="professionalListContainer">
      <div className="sidebar-container">
        <Sidebar />

        <div className="professionalList">
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
      <Link to="/createProfessional">
        <button className="professionalAddButton">Create Professional</button>
      </Link>
    </div>
  );
}
