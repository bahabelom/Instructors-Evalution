const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
});
module.exports = mongoose.model("Users", userSchema);
