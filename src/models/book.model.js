
const mongoose =require("mongoose");

const bookSchema = new mongoose.Schema({
    likes: {integer:true, min:1,default:0},
    coverImage:{type:String, required:false},
    content:{integer:true, required:true},
  
},{
    versionKey:false,
    timestamps:{type:String,required:true}
});

module.exports = mongoose.model("book",bookSchema);

