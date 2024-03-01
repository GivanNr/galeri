import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddUser = () => {
  const [id_user, setId_user] = useState("");
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_user", id_user);
    formData.append("nama", nama);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("alamat", alamat);
    try {
      await axios.post("http://localhost:5000/register", formData, {
        headers: {
          "Content-type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <form onSubmit={saveUser}>
            <div className="field">
              <label className="label">Id</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={id_user}
                  onChange={(e) => setId_user(e.target.value)}
                  placeholder="Id"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">password</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Alamat"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
