import User from "../../db/userSchema.js";

async function addFriend(req, res) {
  try {
    const userId = req.userId;
    const friendUsername = req.body.friendUsername;
    const friend = await User.findOne({
      username: friendUsername
    });

    if (!friend) {
      return res.status(404).send({
        message: "Friend not found",
        success: false
      });
    }


    if (friend._id.toString() === userId) {
      return res.status(400).send({
        message: "You cannot add yourself as a friend",
        success: false
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        message: "User not found",
        success: false
      });
    }

    if (user.friends.includes(friend._id)) {
      return res.status(409).send({
        message: "Friend already exists",
        success: false
      });
    }

    user.friends.push(friend._id);
    await user.save();
    return res.status(200).send({
      message: "Friend added successfully",
      success: true
    });

  } catch (err) {
    console.log(err.message);
    return res.status(500).send({
      message: "Error occured while adding friend",
      success: false
    });
  }
}

export default addFriend;