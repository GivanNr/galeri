import express from "express";
import{
  getAlbumById, 
  getAlbum, 
  addAlbum, 
  updateAlbum, 
  deleteAlbum,
} from "../controllers/AlbumController.js";

const router = express.Router();

router.get('/album', getAlbum);
router.get('/album/:id_album', getAlbumById);
router.post('/album', addAlbum);
router.patch('/album/:id_album', updateAlbum);
router.delete('/album/:id_album', deleteAlbum);

export default router;





// import express from "express";
// import {
//     getAlbum,
//     getAlbumById,
//     saveAlbum,
//     updateAlbum,
//     deleteAlbum
// } from "../controllers/AlbumController.js";

// const router = express.Router();

// router.get('/album', getAlbum)
// router.get('/album/:id_album', getAlbumById)
// router.post('/album', saveAlbum)
// router.patch('/album/:id_album', updateAlbum)
// router.delete('/album/:id_album', deleteAlbum)

// export default router;