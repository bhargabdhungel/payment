import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
    unique: true,
  },
  email:{
    type: String,
    unique: true,
    required: true,
  },
  hashedPassword:{
    type: String,
    required: true,
  },
  friends:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
});


const User = mongoose.model("User", userSchema);

export default User;