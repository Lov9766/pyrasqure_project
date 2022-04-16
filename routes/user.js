const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();

// router.get("/user", (req, res) => {
//   res.send("Hello user");
// });

// router.post("/userpost", (req, res) => {
//     const username = req.body.username;
//     console.log(username);
//     res.send(username);
    
// })

router.put("/:id", verifyToken, async(req,res) => {
  if (req.body.password) {
    req.body.password = cryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY).toString();
  }
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).send(updateUser);
  }catch(err){
    res.status(500).send(err);
  }
}); 


module.exports = router;
