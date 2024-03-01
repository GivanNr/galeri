import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddFoto = () => {
  const [FotoId, setFoto] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const { AlbumId } = useParams();
  const navigate = useNavigate();


  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveFoto = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/foto", {
        FotoId,
        AlbumId,
        Deskripsi,
        file,
      });
      navigate("/foto");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <form onSubmit={saveFoto}>
            <div className="field">
              <label className="label">Deskripsi Foto</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={Deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Deskripsi Foto"
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
                  tambahkan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFoto;