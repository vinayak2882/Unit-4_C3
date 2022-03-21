

const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true,max:30,min:3},
    lastName:{type:String, required:false,max:30,min:3},
    age:{integer:true, required:true},
    email:{type:String, required:true,unique:true},
    profileImages:  {
        data: Buffer,
        contentType: Array
    }
},{
    versionKey:false,
    timestamps:{type:String,required:true}
});

module.exports = mongoose.model("user",userSchema);