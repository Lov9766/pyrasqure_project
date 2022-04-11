const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      typeq: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
     
    },
    image: {
      type: String,
      require: true,
    },
    categories: {
      type: Array,
      
    },
    size: {
      type: String,
    },
    color: {
      type: String,
      
    },
    price: {
      type: Number,
        require: true,
    },
  },
  {
    timestamps: true,
  }
);
const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
