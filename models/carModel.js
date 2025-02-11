const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  release_date: { type: Number, required: true },
  mileage: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  deleted: { type: Boolean, default: false } // For soft deletion
});

// Compound index to optimize queries by model and location
carSchema.index({ model: 1, location: 1 });

module.exports = mongoose.model("Car", carSchema);
