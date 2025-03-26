import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    firstVisit: { type: Boolean, default: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },   

name:{
    type:String,
    required:true
},
studentClass:{
    type:Number,
    required:true
},

exam:{
    type:String,
    required:true
}
});

// Hash password before saving
studentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const bcrypt = await import("bcryptjs");
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

const Student=mongoose.model("Student",studentSchema);

export default Student;