import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const EditAlbum = () => {
  const [isi_laporan, setIsi_laporan] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id_album } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAlbumById();
  }, []);

  const getAlbumById = async () => {
    const response = await axios.get(`http://localhost:5000/album/${id_album}`);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateAlbum = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("isi_laporan", isi_laporan);
    formData.append("foto", file);
    try {
      await axios.patch(`http://localhost:5000/album/${id_album}`, formData, {
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
          <form onSubmit={updateAlbum}>
            <div className="field">
              <label className="label">Isi Laporan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={isi_laporan}
                  onChange={(e) => setIsi_laporan(e.target.value)}
                  placeholder="Isi Laporan"
                />
              </div>
            </div>
           
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <div className="file">
                  <label className="file-label">
                    <input
                      type="file"
                      className="file-input"
                      onChange={loadImage}
                    />
                    <span className="file-cta">
                      <span className="file-label">Choose a file...</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {preview ? (
              <figure className="image is-128x128">
                <img src={preview} alt="Preview Image" />
              </figure>
            ) : (
              ""
            )}

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

export default EditAlbum;