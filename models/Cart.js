const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    userId: {
      typeq: String,
      required: true,
     
    },
        products: [{
            productId: {
            type:String,
            },
            quantity: {
                type: Number,
                default: 1,
            }
    }],
    
  },
  {
    timestamps: true,
  }
);
const CartModel = mongoose.model("Cart", CartSchema);

module.exports = CartModel;
