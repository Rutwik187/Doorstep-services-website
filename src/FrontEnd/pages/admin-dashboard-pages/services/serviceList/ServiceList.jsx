import "./serviceList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import allServices from "../../../../Data/ServicesImports";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";

export default function ServiceList() {
  const [data, setData] = useState(allServices);

  const handleDelete = (serviceId) => {
    setData(data.filter((item) => item.serviceId !== serviceId));
  };

  const columns = [
    { field: "serviceId", headerName: "ID", width: 90 },
    {
      field: "service",
      headerName: "Service",
      width: 400,
      renderCell: (params) => {
        return <div className="serviceListItem">{params.row.desc}</div>;
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/service/" + params.row.serviceId}>
              <button className="serviceListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="serviceListDelete"
              onClick={() => handleDelete(params.row.serviceId)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="serviceListContainer">
      <div className="sidebar-container">
        <Sidebar />
        <div className="serviceList">
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
      <Link to="/newService">
        <button className="serviceAddButton">Create Service</button>
      </Link>
    </div>
  );
}
