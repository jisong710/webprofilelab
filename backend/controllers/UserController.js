import User from "../models/UserModel.js";
import Project from "../models/ProjectModel.js";
import Berita from "../models/BeritaModel.js";
 
// R
export const getBerita = async (req, res) => {
    try {
        const Berita1 = await Berita.find();
        res.json(Berita1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const getProject = async (req, res) => {
    try {
        const Project1 = await Project.find();
        res.json(Project1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// U
export const updateProject = async (req, res) => {
    try {
        const updateProject = await Project.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateProject);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const updateUser = async (req, res) => {
    try {
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const updateBerita = async (req, res) => {
    try {
        const updateBerita = await Berita.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateBerita);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// C

export const saveBerita = async (req, res) => {
    const Berita1 = new Berita(req.body);
    try {
        const insertedBerita = await Berita1.save();
        res.status(201).json(insertedBerita);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const saveUser = async (req, res) => {
    const User1 = new User(req.body);
    try {
        const insertedUser = await User1.save();
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const saveProject = async (req, res) => {
    const Project1 = new Project(req.body);
    try {
        const inserteduser = await Project1.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

 

// R 
 
export const getProjectById = async (req, res) => {
    try {
        const Project = await Project.findById(req.params.id);
        res.json(Project);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const getBeritaById = async (req, res) => {
    try {
        const Berita = await Berita.findById(req.params.id);
        res.json(Berita);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const getUserById = async (req, res) => {
    try {
        const User = await User.findById(req.params.id);
        res.json(User);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


