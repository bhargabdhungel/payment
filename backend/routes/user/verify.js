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
    const friendsId = user.friends;
    const friends = await Promise.all(
      friendsId.map(async (friendId) => {
        const friend = await User.findById(friendId);
        return {
          name: friend.name,
          username: friend.username,
        };
      })
    );
    const userData = { name, username, email, friends };
    return res.status(200).json({ success: true, userData });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
}

export default verify;