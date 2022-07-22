import "./professionalList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { professionalRows } from "../../../../Data/dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import axios from "../../../../api/axios";

export default function ProfessionalList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/admin/getProfessionals", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        setData(response.data.professionals);

        // setData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User Name",
      width: 200,
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "role",
      headerName: "Role",
      width: 120,
    },
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

  const rows = data.map((row) => ({
    id: row._id,
    username: row.fullName,
    email: row.email,
    role: row.serviceName,
    location: row.location,

    action: (
      <>
        <Link to={"/professional/" + row._id}>
          <button className="professionalListEdit">Edit</button>
        </Link>
        <DeleteOutline
          className="professionalListDelete"
          onClick={() => handleDelete(row._id)}
        />
      </>
    ),
  }));

  return (
    <div className="professionalListContainer">
      <div className="sidebar-container">
        <Sidebar />

        <div className="professionalList">
          <DataGrid
            sx={{
              fontSize: "1.5rem",
            }}
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            pageSize={8}
            rowsPerPageOptions={[8]}
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
