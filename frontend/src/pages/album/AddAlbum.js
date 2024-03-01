import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAlbum = () => {
  const [albumId, setAlbum_Id] = useState("");
  const [NamaAlbum, setNama] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const [TanggalDibuat, setTgl] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const saveAlbum = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/album", {
        albumId,
        NamaAlbum,
        Deskripsi,
        TanggalDibuat,
        userId,
      });
      navigate("/album");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <form onSubmit={saveAlbum}>
          <div className="field">
              <label className="label">Id Album</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={albumId}
                  onChange={(e) => setAlbum_Id(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nama Album</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={NamaAlbum}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">deskripsi</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={Deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggal di buat</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  value={TanggalDibuat}
                  onChange={(e) => setTgl(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAlbum;





  // import React, { useState, useEffect } from "react";
  // import axios from "axios";
  // import { useNavigate } from "react-router-dom";
  // import Navbar from "../../components/Navbar";

  // const AddAlbum = () => {
  //   const [id_album, setId_album] = useState("");
  //   const [tgl_album, setTgl_album] = useState("");
  //   const [id_user, setId_user] = useState("");
  //   const [nama_album, setNama_album] = useState("");
  //   // const [file, setFile] = useState("");
  //   // const [preview, setPreview] = useState("");
  //   const navigate = useNavigate();
  //   const [users, setUser] = useState([]);

  //   useEffect(() => {
  //     getUser();
  //   }, []);

  //   const getUser = async () => {
  //     const response = await axios.get("http://localhost:5000/user");
  //     setUser(response.data);
  //   };

  //   // const loadImage = (e) => {
  //   //   const image = e.target.files[0];
  //   //   setFile(image);
  //   //   setPreview(URL.createObjectURL(image));
  //   // };

  //   const saveAlbum= async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("id_album", id_album);
  //     formData.append("tgl_album", tgl_album);
  //     formData.append("id_user", id_user);
  //     formData.append("nama_album", nama_album);
  //     try {
  //       console.log(formData);
  //       await axios.post("http://localhost:5000/album", formData, {
  //         headers: {
  //           "Content-type": "multipart/form-data",
  //         },
  //       });
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   return (
  //     <>
  //       <Navbar />
  //       <div className="columns is-centered mt-5">
  //         <div className="column is-half">
  //           <form onSubmit={saveAlbum}>
  //             <div className="field">
  //               <label className="label">Id Album</label>
  //               <div className="control">
  //                 <input
  //                   type="text"
  //                   className="input"
  //                   value={id_album}
  //                   onChange={(e) => setId_album(e.target.value)}
  //                   placeholder="Id Album"
  //                 />
  //               </div>
  //             </div>
  //             <div className="field">
  //               <label className="label">Nama Album</label>
  //               <div className="control">
  //                 <input
  //                   type="text"
  //                   className="input"
  //                   value={nama_album}
  //                   onChange={(e) => setNama_album(e.target.value)}
  //                   placeholder="Nama Album"
  //                 />
  //               </div>
  //             </div>
  //             <div className="field">
  //               <label className="label">Tgl Album</label>
  //               <div className="control">
  //                 <input
  //                   type="date"
  //                   className="input"
  //                   value={tgl_album}
  //                   onChange={(e) => setTgl_album(e.target.value)}
  //                   placeholder="Tanggal Album"
  //                 />
  //               </div>
  //             </div>
  //             {/* <div className="field">
  //               <label className="label">Image</label>
  //               <div className="control">
  //                 <div className="file">
  //                   <label className="file-label">
  //                     <input
  //                       type="file"
  //                       className="file-input"
  //                       onChange={loadImage}
  //                     />
  //                     <span className="file-cta">
  //                       <span className="file-label">Choose a file...</span>
  //                     </span>
  //                   </label>
  //                 </div>
  //               </div>
  //             </div> */}

  //             {/* {preview ? (
  //               <figure className="image is-128x128">
  //                 <img src={preview} alt="Preview Image" />
  //               </figure>
  //             ) : (
  //               ""
  //             )} */}

  //             <div className="field">
  //               <div className="control">
  //                 <button type="submit" className="button is-success">
  //                   Save
  //                 </button>
  //               </div>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // export default AddAlbum;