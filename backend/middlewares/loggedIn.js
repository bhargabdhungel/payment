import jwt from "jsonwebtoken";
async function loggedIn(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({
        message: "Should be logged in",
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({
      message: "Should be logged in",
      success: false,
    });
  }
}

export default loggedIn;