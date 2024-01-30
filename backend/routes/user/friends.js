import User from "../../db/userSchema.js";

async function friends(req, res) {
  try{

    const userId = req.userId;
    const friends = await User.findById(userId).populate("friends");

    const dataToSend = friends.friends.map((friend) => ({
      name: friend.name,
      username: friend.username,
    }));


    return res.status(200).send({
      message: "Friends fetched successfully",
      success: true,
      friends: dataToSend,
    });
  }
  catch(err){
    console.log(err.message);
    return res.status(500).send({
      message: "Error occured while fetching friends",
      success: false,
    });
  }
}

export default friends;