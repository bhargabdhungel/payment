import User from "../../db/userSchema.js";
import bcrypt from "bcrypt";

async function signup(req, res) {
  try {
    const { name, email, password, username} = req.body;

    //check if the user already exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(409).send({
        message: "User already exists",
        success: false,
      });
    }

    //hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 12);

    //store the user in the database
    const user = new User({
      name: name,
      email: email,
      hashedPassword: hashedPassword,
      username : username,
    });
    await user.save();


    return res.status(201).send({
      message: "User created successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Error occured while signing up",
      success: false,
    });
  }
}
export default signup;
