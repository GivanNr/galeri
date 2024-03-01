import express from "express";
import {
    getUser,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

import {
login,
logout,
refreshToken,
register,
verifyToken
    
} from "../controllers/authentice.js"

const router = express.Router();

router.get('/user', verifyToken, getUser)
router.get('/user/:id_user', getUserById)
// router.post('/user', saveUser)
router.patch('/user/:id_user', updateUser)
router.delete('/user/:id_user', deleteUser)

router.post('/register',register)
router.post('/login',login)
router.delete('/logout',logout)
router.get('/token',refreshToken)




export default router;