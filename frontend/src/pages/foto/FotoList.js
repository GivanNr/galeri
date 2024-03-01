import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import axios from "axios";

const Album = () => {
  const album = useState([]);
  const [NamaAlbum, setNama] = useState([]);
  const [TanggalDibuat, setTgl] = useState([]);

  useEffect(() => {
    getAlbum();
  }, []);

  const getAlbum = async () => {
    const response = await axios.get("http://localhost:5000/album");
    NamaAlbum(response.data);
    TanggalDibuat(response.data);
    album(response.data);

  };

  return (
    <div>
      <Navbar/>
      <div className="container mt-5">
        <PrimaryButton thisPath={'/addAlbum'} NamaButton={'Add Album'} />
        <div className="columns is-multiline mt-2"></div>
      </div>


      <div className="container mt-5">
       <div className="columns is-multiline mt-2">
           {album.map((album) => (
            <div className="column is-one-quarter" key={album.id_album}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{setNama}</p>
                      <p className="title is-4">{setTgl}</p>
                    </div>
                  </div>
                </div>

                <footer className="card-footer">
                  <Link to={`/editAlbum/${album.AlbumId}`} className="card-footer-item">
                    Edit
                  </Link>
                  {/* <a
                    onClick={() => deleteAlbum(album.AlbumId)}
                    className="card-footer-item"
                  >
                    Delete
                  </a> */}
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>


      
        {/* <div class="flex flex-col md:grid md:grid-cols-5 gap-5 ml-5 mr-5">
          {NamaAlbum.map((item) => (
            <div key={item.id_user} class="relative rounded overflow-hidden">
              { <img
                src="https://i.pinimg.com/564x/b7/c1/ec/b7c1ec7922a98b012e186fa6436b0ca0.jpg"
                alt="Hanging Planters"
                class="w-full"
              /> }
              <p class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                {item.NamaAlbum}
              </p>
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default Album;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar.js";
// import PrimaryButton from "../../components/PrimaryButton.js";

// const AlbumList = () => {
//   const [albums, setAlbum] = useState([]);

//   useEffect(() => {
//     getAlbum();
//   }, []);

//   const getAlbum = async () => {
//     const response = await axios.get("http://localhost:5000/album");
//     console.log(response.data)
//     setAlbum(response.data);
//   };

//   const deleteAlbum = async (id_album) => {
//     try {
//       await axios.delete(`http://localhost:5000/album/${id_album}`);
//       getAlbum();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <PrimaryButton thisPath={'/addAlbum'} NamaButton={'Add Album'} />
//         <div className="columns is-multiline mt-2">
//           {albums.map((album) => (
//             <div className="column is-one-quarter" key={album.id_album}>
//               <div className="card">
//                 <div className="card-image">
//                   <figure className="image is-4by3">
//                     <img src={`http://localhost:5000/images/${album.foto}`} alt="Image" />
//                   </figure>
//                 </div>
//                 <div className="card-content">
//                   <div className="media">
//                     <div className="media-content">
//                       <p className="title is-4">Nama Album :{album.nama_album}</p>
//                       <p className="title is-4">Tanggal  :{album.tgl_album}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <footer className="card-footer">
//                   <Link to={`/editAlbum/${album.id_album}`} className="card-footer-item">
//                     Edit
//                   </Link>
//                   <a
//                     onClick={() => deleteAlbum(album.id_album)}
//                     className="card-footer-item"
//                   >
//                     Delete
//                   </a>
//                 </footer>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AlbumList;