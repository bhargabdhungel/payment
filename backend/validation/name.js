import zod from "zod";

function validateName(req,res){
  const goodName = zod.string().min(1).max(255);
  const result = goodName.safeParse(req.body.name);
  if (!result.success) {
    return res.status(400).send({
      message: "Name must be between 1 and 255 characters",
      success: false,
    });
  }
  req.body.name = result.data;
}

export default validateName;