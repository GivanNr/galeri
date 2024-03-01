import Komentar from "../models/KomenModel.js";

export const getKomen = async (req, res) => {
    try {
      const Komen = await Komentar.findAll();
      res.json(Komen);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const getKomenById = async (req, res) => {
    try {
      const Komen = await Album.findOne({
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
  
export const saveKomen = async (req, res) => {
    const {albumId, NamaAlbum, Deskripsi, TanggalDibuat, userId } = req.body;
    try {
        const newAlbum = await Album.create({ albumId, NamaAlbum, Deskripsi, TanggalDibuat, userId });
        res.status(201).json({ album: newAlbum, msg: "Album created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateKomen = async (req, res) => {
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
  
export const deleteKomen = async (req, res) => {
    try {
      const deleted = await Album.destroy({ where: { albumId: req.params.id } });
      if (deleted) {
        return res.status(200).json({ msg: "Komentar deleted successfully" });
      }
      throw new Error("Komentar not found");
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