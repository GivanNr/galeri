import express from "express";
import {
    getFoto,
    getFotoById,
    saveFoto,
    updateFoto,
    deleteFoto,
} from "../controllers/FotoController.js";

const router = express.Router();

router.get('/foto', getFoto)
router.get('/foto/:id_foto', getFotoById)
router.post('/foto', saveFoto)
router.patch('/foto/:id_foto', updateFoto)
router.delete('/foto/:id_foto', deleteFoto)

export default router;