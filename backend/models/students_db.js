import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
class:{
    type:Number,
    required:true
},
email:{
    type: String,
    required:true
},
exam:{
    type:String,
    required:true
}
});

const student=mongoose.model("student",studentSchema);

export default student;