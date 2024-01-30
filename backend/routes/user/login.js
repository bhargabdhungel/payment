import User from "../../db/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function login(req, res) {
  try {
    const { emailOrUsername, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!passwordMatch) {
      return res.status(401).send({
        message: "Incorrect password",
        success: false,
      });
    }

    // console.log(user);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    // you can also send the token in a cookie if you like
    return res.status(200).send({
      message: "User logged in successfully",
      success: true,
      token: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Error occured while logging in",
      success: false,
    });
  }
}

export default login;
