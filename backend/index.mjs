import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './db/conifg.js';
import userRouter from './routes/user/index.js';

dotenv.config();
const app = express();
app.use(express.json());
connectDatabase();



app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("API is running");
});



// this is global error handler
app.use((err,req,res,next) => {
  console.log(err);
  console.log(req);
  return res.status(500).send({
    message: "Something went wrong",
    success: false,
  });
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} ❤️`);
});