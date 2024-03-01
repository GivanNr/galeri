import express from "express";
import{
  getLikeById, 
  getLike, 
//   saveLike, 
  updateLike, 
  deleteLike,
} from "../controllers/LikeController.js";

const router = express.Router();

router.get('/like', getLike);
router.get('/like/:id_like', getLikeById);
// router.post('/like', saveLike);
router.patch('/like/:id_like', updateLike);
router.delete('/like/:id_like', deleteLike);

export default router;