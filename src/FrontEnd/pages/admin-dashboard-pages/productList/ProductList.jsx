import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import allServices from "../../../Data/ServicesImports";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../../components/admin-dashboard/sidebar/Sidebar";

export default function ProductList() {
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
        return <div className="productListItem">{params.row.desc}</div>;
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
            <Link to={"/product/" + params.row.serviceId}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.serviceId)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="productList">
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
  );
}
