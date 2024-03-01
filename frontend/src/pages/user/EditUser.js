import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const EditUser = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const { userId_user } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/user/${userId_user}`);
    setNama(response.data.nama);
    setUsername(response.data.username);
    setPassword(response.data.password);
    setAlamat(response.data.alamat);

  };

  const updateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("alamat", alamat);
    try {
      await axios.patch(`http://localhost:5000/user/${userId_user}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
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
          <form onSubmit={updateUser}>
            <div className="field">
              <label className="label">Masyarakat Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masyarakat Nama"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Masyarakat Username</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masyarakat Username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Masyarakat Password</label>
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
              <label className="label">alamat</label>
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
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
