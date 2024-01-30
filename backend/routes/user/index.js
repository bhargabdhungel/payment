import { Router } from "express";
import signup from "./signup.js";
import login from "./login.js";
import loggedIn from "../../middlewares/loggedIn.js";
import validateSignupInput from "../../validation/signupInput.js";
import addFriend from "./addFriend.js";

const userRouter = Router();


userRouter.post("/signup",validateSignupInput,signup);
userRouter.post("/login", login);
userRouter.post("/addFriend", loggedIn, addFriend);


export default userRouter;