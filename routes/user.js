const router = require("express").Router();

router.get("/user", (req, res) => {
  res.send("Hello user");
});

router.post("/userpost", (req, res) => {
    const username = req.body.username;
    console.log(username);
    res.send(username);
    
})

module.exports = router;
