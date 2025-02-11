const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  location: { type: String, required: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true } // Stored as a hashed value
});

module.exports = mongoose.model("User", userSchema);
