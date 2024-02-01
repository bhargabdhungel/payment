import User from "../../db/userSchema.js";

async function search(req, res) {
  try {
    const filter = req.query.filter.trim();
    if (filter === "")
      return res.status(400).send({
        message: "Filter is required",
        success: false,
      });
    const userId = req.userId;

    const users = await User.find({
      $or: [{ username: { $regex: filter } }, { email: { $regex: filter } }],
    }).limit(10);

    return res.json({
      message: "Users fetched successfully",
      success: true,
      result: users
        .filter((user) => user._id !== userId)
        .map((user) => ({
          name: user.name,
          username: user.username,
        })),
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({
      message: "Error occured while fetching friends",
      success: false,
    });
  }
}

export default search;
