import mongoose from "mongoose";
 
const Berita = mongoose.Schema({
    judul:{
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
 
export default mongoose.model('Berita', Berita);