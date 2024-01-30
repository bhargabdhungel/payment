import zod from "zod";

function validateEmail(req,res){
  const goodEmail = zod.string().email();
  const result = goodEmail.safeParse(req.body.email);
  if (!result.success) {
    return res.status(400).send({
      message: "Invalid email",
      success: false,
    });
  }
  req.body.email = result.data;
}

export default validateEmail;