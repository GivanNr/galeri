import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import Navbar from "../../components/Navbar";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get("http://localhost:5000/user");
    setUser(response.data);
  };

  const deleteUser = async (userId_user) => {
    try {
      await axios.delete(`http://localhost:5000/user/${userId_user}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <PrimaryButton thisPath={'/addUser'} NamaButton={'Add User'} />
        <div className="columns is-multiline mt-2">
          {users.map((user) => (
            <div className="column is-one-quarter" key={user.id_user}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">id_user: {user.id_user}</p>
                      <p className="title is-4">email: {user.email}</p>
                      <p className="title is-4">Username:{user.username}</p>
                      <p className="title is-4">Alamat :{user.alamat}</p>
                    </div>
                  </div>
                </div>

                <footer className="card-footer">
                  <Link to={`/editUser/${user.id_user}`} className="card-footer-item">
                    Edit
                  </Link>
                  <a
                    onClick={() => deleteUser(user.id_user)}
                    className="card-footer-item"
                  >
                    Delete
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
