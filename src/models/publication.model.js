
const mongoose =require("mongoose");

const publicSchema = new mongoose.Schema({
    name: {type:String, required:true},
    
},{
    versionKey:false,
    timestamps:{type:String,required:true}
});

module.exports = mongoose.model("public",publicSchema);


