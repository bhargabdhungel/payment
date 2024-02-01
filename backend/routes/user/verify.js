import User from "../../db/userSchema.js";
import jwt from "jsonwebtoken";

async function verify(req, res){
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
  
    const user = await User.findById(decode.id);
    if (!user) return res.status(400).json({ success: false });
    const name = user.name;
    const username = user.username;
    const email = user.email;
    const friends = user.friends;
    const userData = { name, username, email, friends };
    return res.status(200).json({ success: true, userData });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
}

export default verify;