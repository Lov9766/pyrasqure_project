const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    typeq: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {
    timestamps: true,
}
);
const UserModel=mongoose.model("User", UserSchema);

module.exports = UserModel;