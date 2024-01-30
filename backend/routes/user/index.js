import { Router } from "express";
import signup from "./signup.js";
import login from "./login.js";
import loggedIn from "../../middlewares/loggedIn.js";
import validateSignupInput from "../../validation/signupInput.js";
import addFriend from "./addFriend.js";
import friends from "./friends.js";
import search from "./search.js";

const userRouter = Router();


userRouter.post("/signup",validateSignupInput,signup);
userRouter.post("/login", login);
userRouter.post("/addFriend", loggedIn, addFriend);
userRouter.get("/search",loggedIn,search);
userRouter.get("/friends",loggedIn,friends);

export default userRouter;