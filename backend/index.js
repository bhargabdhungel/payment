import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());






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