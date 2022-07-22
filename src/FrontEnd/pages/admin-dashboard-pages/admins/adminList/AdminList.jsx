import "./adminList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { adminRows } from "../../../../Data/dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../../../components/admin-dashboard/sidebar/Sidebar";
import axios from "../../../../api/axios";

export default function AdminList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/admin/getAdmins", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(response.data);
        setData(response.data.admins);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullName",
      headerName: "Admin Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div>
            {/* <img className="adminListImg" src={params.row.avatar} alt="" /> */}
            {params.row.fullName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phoneNo", headerName: "Phone No.", width: 200 },
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

  const rows = data.map((row) => ({
    id: row._id,
    fullName: row.fullName,
    email: row.email,
    phoneNo: row.phoneNo,
    role: row.role,
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
    <div className="adminListContainer">
      <div className="sidebar-container">
        <Sidebar />

        <div className="adminList">
          <DataGrid
            sx={{
              fontSize: "1.5rem",
            }}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[8]}
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
