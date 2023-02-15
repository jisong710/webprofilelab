import express from "express";
import { 
    getBerita,
    getBeritaById, 
    getProject,
    getProjectById,
    getUser,
    getUserById, 
    updateBerita,
    updateProject,
    updateUser,
    saveBerita,
    saveProject,
    saveUser
    


} from "../controllers/UserController.js";
 
const router = express.Router();
// berita
router.get('/Berita', getBerita);
router.get('/Berita/:id', getBeritaById);
router.post('/MakeBerita', saveBerita);
router.patch('/UpdateBerita/:id', updateBerita);
// Project
router.get('/Project', getProject);
router.get('/Project/:id', getProjectById);
router.post('/MakeProject', saveProject);
router.patch('/UpdateProject/:id', updateProject);
// user
router.get('/User', getUser);
router.get('/User/:id', getUserById);
router.post('/MakeUser', saveUser);
router.patch('/UpdateUser/:id', updateUser);
 
export default router;