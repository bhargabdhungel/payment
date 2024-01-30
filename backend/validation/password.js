import zod from "zod";

function validatePassword(req,res){
  const goodPassword = zod.string().min(6).max(255);
  const result = goodPassword.safeParse(req.body.password);
  if (!result.success) {
    return res.status(400).send({
      message: "Password length is improper",
      success: false,
    });
  }
  req.body.password = result.data;
}

export default validatePassword;