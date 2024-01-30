import zod from "zod";
async function signupInput(req,res,next){
  const goodEmail = zod.string().email();
  const goodName = zod.string().min(1).max(255);
  const goodPassword = zod.string().min(6).max(255);
  const goodUsername = zod.string().regex(/^[a-zA-Z0-9_]+$/).min(3).max(255);

  try{
    const resEmail = goodEmail.safeParse(req.body.email);
    if (!resEmail.success) {
      return res.status(400).send({
        message: "Invalid email",
        success: false,
      });
    }
    req.body.email = resEmail.data;
    const resName = goodName.safeParse(req.body.name);
    if (!resName.success) {
      return res.status(400).send({
        message: "Name must be between 1 and 255 characters",
        success: false,
      });
    }
    req.body.name = resName.data;
    const resPassword = goodPassword.safeParse(req.body.password);
    if (!resPassword.success) {
      return res.status(400).send({
        message: "Password length is improper",
        success: false,
      });
    }
    req.body.password = resPassword.data;
    const resUsername = goodUsername.safeParse(req.body.username);
    if (!resUsername.success) {
      return res.status(400).send({
        message: "Username is improper",
        success: false,
      });
    }
    req.body.username = resUsername.data.toLocaleLowerCase();
    next();
  }
  catch(err){
    return res.status(500).send({
      message: "Error in signup",
      success: false,
    });
  }
}


export default signupInput;