const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();
const CartModel = require("../models/Cart");

router.post("/add", verifyToken, async (req, res) => {
  try {
    const product = await new CartModel(req.body);
    const savedata = await product.save();
    res.status(201).send(savedata);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/update/:id",  verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    // console.log("lov");
    res.status(200).send(updateCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/delete/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const deletedCart = await CartModel.findByIdAndDelete(req.params.id);
      res.status(202).send(`product in cart is deleted${deletedCart}`);
      
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await CartModel.find({userId: req.params.userId});
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.get("/find", verifyTokenAndAdmin, (req, res) => {
    try {
        const cart = CartModel.find();
    res.status(200).send(cart);
    } catch (err) {
        res.status(500).send(err);
    }
    
})


module.exports = router;
