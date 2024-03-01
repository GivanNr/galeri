import express from "express";
import{
  getKomenById, 
  getKomen, 
  saveKomen, 
  updateKomen, 
  deleteKomen,
} from "../controllers/KomenController.js";

const router = express.Router();

router.get('/komen', getKomen);
router.get('/album/:id_komen', getKomenById);
router.post('/album', saveKomen);
router.patch('/album/:id_komen', updateKomen);
router.delete('/album/:id_komen', deleteKomen);

export default router;