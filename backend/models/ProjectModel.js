import mongoose from "mongoose";
 
const Project = mongoose.Schema({
    Proyek:{
        type: String,
        required: true
    },
    tanggal:{
        type: Date,
        
        required: false
    },
    isi:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('Project', Project);