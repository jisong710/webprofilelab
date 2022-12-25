import express from "express";
import { 
    getBerita,
    getBeritaById, 
    getProject,
    getProjectById

} from "../controllers/UserController.js";
 
const router = express.Router();
 
router.get('/Berita', getBerita);
router.get('/Berita/:id', getBeritaById);
router.get('/Berita', getProject);
router.get('/Berita/:id', getProjectById);
 
export default router;