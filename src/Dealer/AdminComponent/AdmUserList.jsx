import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import axios from "axios";
import { selectToken } from "../../redux/AuthSlice";
import { useSelector } from "react-redux";
import AdmNavBar from "./AdmNavBar";
import Swal from "sweetalert2";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function AdmUserList() {
  const [users, setUsers] = useState([]);
  const [isdelete, setIsdelete] = useState([]);
  const token = useSelector(selectToken);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message, data } = response.data;
      if (status === "success") {
        setUsers(data);
      } else {
        console.error("User retrieval failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  const deleteUser = async (userId, token) => {
    try {
      const response = await axios.delete(`${baseUrl}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message } = response.data;
      if (status === "success") {
        console.log("User deleted.");
        setIsdelete([...isdelete, "User deleted."]);
        fetchUsers();
      } else {
        console.error("User deletion failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "Error!",
        text: "Error in the server side. Please Try again later",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "center",
      });
    }
  };

  const handleRemove = (id) => {
    deleteUser(id, token);
  };

  return (
    <div>
      <AdmNavBar />
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Id</th>
            <th scope="col">Actions</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((user, index) => (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{user.username}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{user.email}</p>
              </td>
              <td>{user._id}</td>
              <td>
                <MDBBtn pill rounded size="sm">
                  open
                </MDBBtn>
              </td>
              <td>
                <MDBBtn
                  color="danger"
                  pill
                  onClick={() => handleRemove(user._id)}
                  rounded
                  size="sm"
                >
                  delete
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
