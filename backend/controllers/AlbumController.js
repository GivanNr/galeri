import Album from "../models/AlbumModel.js";


export const getAlbum = async (req, res) => {
    try {
      const album = await Album.findAll();
      res.json(album);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const getAlbumById = async (req, res) => {
    try {x
      const album = await Album.findOne({
        where: {
          albumId: req.params.id
        },
      });
      if (!album) {
        return res.status(404).json({ msg: "Album not found" });
      }
      res.json(album);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const addAlbum = async(req, res)=> {
  // const NamaAlbum = req.body.NamaAlbum;
  // const Deskripsi = req.body.Deskripsi;
  // const TanggalDibuat = new Date();
  // const userId = req.body.userId;
  const NamaAlbum = "Udin";
  const Deskripsi = "Petot";
  const TanggalDibuat = "2022-03-22";
  const userId = 1;

  await Album.create({NamaAlbum: NamaAlbum, Deskripsi: Deskripsi, TanggalDibuat: TanggalDibuat, userId: userId});
  res.status(201).json({msg: "Album Created Succesfully"});
  // try{
  //     await Album.create({NamaAlbum: NamaAlbum, Deskripsi: Deskripsi, TanggalDibuat: TanggalDibuat , userId: userId});
  //     res.status(201).json({msg: "Album Created Succesfully"});
  // } catch (error) {
  //     res.status(500).json({kontol: "asu"})
  // }
};


// export const addAlbum = async (req, res) => {
//     const {NamaAlbum, Deskripsi, TanggalDibuat, userId } = req.body;
//     try {
//       await Album.create({NamaAlbum, Deskripsi, TanggalDibuat, userId });
//       res.status(201).json({ msg: "Album dibuat" });
//       Console.log()

//   } catch (error) {
//       console.log(error);
//       res.status(500).json({ msg: "Internal Server Error" });
//   }
   
   
   
   
//     try {
//         const newAlbum = await Album.create({ albumId, NamaAlbum, Deskripsi, TanggalDibuat, userId });
//         res.status(201).json({ album: newAlbum, msg: "Album created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

export const updateAlbum = async (req, res) => {
    try {
      const [updated] = await Album.update(req.body, {
        where: { albumId: req.params.id }
      });
      if (updated) {
        const updatedAlbum = await Album.findOne({ where: { albumId: req.params.id } });
        return res.status(200).json({ album: updatedAlbum, msg: "Album updated successfully" });
      }
      throw new Error("Album not found");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const deleteAlbum = async (req, res) => {
    try {
      const deleted = await Album.destroy({ where: { albumId: req.params.id } });
      if (deleted) {
        return res.status(200).json({ msg: "Album deleted successfully" });
      }
      throw new Error("Album not found");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};







// import Album from "../models/AlbumModel.js";
// import path from "path";
// import fs from "fs";

// export const getAlbum = async(req, res)=>{
//     try {
//         const response = await Album.findAll();
//         res.json(response)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const getAlbumById = async(req, res)=>{
//     try {
//         const response = await Album.findOne({
//             where:{
//                 id_album : req.params.id_album
//             }
//         });
//         res.json(response)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const saveAlbum = async(req, res)=>{
//     const id_album = req.body.id_album;
//     const tgl_album = req.body.tgl_album;
//     const id_user = req.body.id_user;
//     const nama_album = req.body.nama_album;

//     // BUAT FILE FOTO NANTI
//     // const fileSize = foto.data.length;
//     // const ext = path.extname(foto.name);
//     // const fileName = foto.md5 + ext;
//     // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//     // const allowedType = ['.png', '.jpg', '.jpeg'];

//     // if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg : "Foto tidak valid"});
//     // if(fileSize > 5000000) return res.status(422).json({msg : "Foto harus kurang dari 5MB"});

//     // foto.mv(`./public/images/${fileName}`, 
//     async(err)=>{
//         if(err) return res.status(500).json({msg: err.message});
//         try {
//             await Album.create({id_album: id_album,tgl_album:tgl_album, id_user:id_user, nama_album:nama_album, foto:fileName})
//             res.status(201).json({msg: "Album telah diupload"})
//         }catch (error){
//             console.log(error.message);
//         }
//     }
// }

// export const updateAlbum = async(req, res)=>{
//     const album = await Album.findOne({
//         where:{
//             id_album : req.params.id_album
//         }
//     });
//     if(!album) return res.status(404).json({msg: "Data tidak ditemukan"});
    
//     let fileName = "";
//     if(req.files === null){
//         fileName =album.foto;
//     }else{
//         const foto = req.files.foto;
//         const fileSize = foto.data.length;
//         const ext = path.extname(foto.name);
//         fileName = foto.md5 + ext;
//         const allowedType = ['.png','.jpg','.jpeg'];

//         if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Foto tidak valid"});
//         if(fileSize > 5000000) return res.status(422).json({msg: "Foto harus kurang dari 5MB"});

//         const filepath = `./public/images/${album.foto}`;
//         fs.unlinkSync(filepath);

//         foto.mv(`./public/images/${fileName}`, (err)=>{
//             if(err) return res.status(500).json({msg: err.message});
//         });
//     }
//     const id_album = req.body.id_album;
//     const tgl_album = req.body.tgl_album;
//     const id_user = req.body.id_user;
//     const nama_album = req.body.nama_album;
//     const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
//     try {
//         await Album.update({id_album:id_album, tgl_album:tgl_album, id_user:id_user, nama_album:nama_album, foto:fileName},{
//             where:{
//                 id_album: req.params.id_album
//             }
//         });
//         res.status(200).json({msg: "Album berhasil diubah"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const deleteAlbum = async(req, res)=>{
//     const album = await Album.findOne({
//         where:{
//             id_album: req.params.id_album
//         }
//     });
//     if(!album) return res.status(404).json({msg: "Data tidak ditemukan"});

//     try {
//         // const filepath = `./public/images/${album.foto}`;
//         // fs.unlinkSync(filepath);
//         await album.destroy({
//             where:{
//                 id_album : req.params.id_album
//             }
//         });
//         res.status(200).json({msg: "Album berhasil dihapus"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }