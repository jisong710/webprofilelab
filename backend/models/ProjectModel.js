import mongoose from "mongoose";
 
const Project = mongoose.Schema({
    proyek:{
        type: String,
        required: true
    },
    tanggal:{
        type: Date,
        value: Date.now()
    },
    isi:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('Project', Project);